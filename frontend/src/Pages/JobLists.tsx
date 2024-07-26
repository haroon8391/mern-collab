import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../services/jobService";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
}

const JobLists = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const data = await jobService.getAll();
      setJobs(data);
      console.log(data);
    };

    fetchJobs();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-2">
              {job.description.substring(0, 20)}...
            </p>
            <p className="text-gray-500 mb-4">{job.location}</p>
            <Link
              to={`/jobs/${job.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobLists;
