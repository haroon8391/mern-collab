import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../services/jobService";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  job_category: string;
}

const JobLists = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currPage, setcurrPage] = useState<number>(1);
  const jobsPerPage = 18;

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await jobService.getAll();
      setJobs(data);
      setFilteredJobs(data);
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    console.log(jobs);
    console.info("Jobs fetched successfully");
    console.log(filteredJobs);
  });

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      return selectedCategory ? job.job_category === selectedCategory : true;
    });
    setFilteredJobs(filtered);
    setcurrPage(1);
  }, [selectedCategory, jobs]);

  const lastJob = currPage * jobsPerPage;
  const firstJob = lastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(firstJob, lastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber: number) => setcurrPage(pageNumber);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const paginationRange = 5;
  const startPage = Math.max(1, currPage - Math.floor(paginationRange / 2));
  const endPage = Math.min(totalPages, startPage + paginationRange - 1);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>

      {/* Centered Category Filter */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Software Development">Software Development</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Database Administration">
            Database Administration
          </option>
          <option value="Quality Assurance">Quality Assurance</option>
        </select>
      </div>

      {/* Job List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-4">
                {job.description.substring(0, 20)}...
              </p>
              <p className="text-gray-500 mb-4">{job.location}</p>
              <Link
                to={`/jobs/${job.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs found</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex space-x-2">
            <button
              onClick={() => handlePageChange(currPage - 1)}
              disabled={currPage === 1}
              className="px-4 py-2 border rounded bg-white text-blue-500 hover:bg-gray-100 disabled:opacity-50"
            >
              &lt; Previous
            </button>

            {startPage > 1 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className={`px-4 py-2 border rounded ${
                    currPage === 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } hover:bg-blue-600 hover:text-white`}
                >
                  1
                </button>
                {startPage > 2 && <span className="px-4 py-2">...</span>}
              </>
            )}

            {pageNumbers
              .filter((number) => number >= startPage && number <= endPage)
              .map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`px-4 py-2 border rounded ${
                    currPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } hover:bg-blue-600 hover:text-white`}
                >
                  {number}
                </button>
              ))}

            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && (
                  <span className="px-4 py-2">...</span>
                )}
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`px-4 py-2 border rounded ${
                    currPage === totalPages
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } hover:bg-blue-600 hover:text-white`}
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => handlePageChange(currPage + 1)}
              disabled={currPage === totalPages}
              className="px-4 py-2 border rounded bg-white text-blue-500 hover:bg-gray-100 disabled:opacity-50"
            >
              Next &gt;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default JobLists;
