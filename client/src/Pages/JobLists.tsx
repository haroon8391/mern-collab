import React, { useEffect, useState } from "react";

interface Job {
  id: string; // Adjust type based on your backend data
  title: string;
  description: string;
  // Add other fields if necessary
}

const JobLists = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:3001/api/v1/jobs");
      const data = await response.json();
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
            <p className="text-gray-700 mb-2">{job.description}</p>
            <p className="text-gray-500 mb-4">Location</p>
            <a href={`/`} className="text-blue-500 hover:underline">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobLists;
