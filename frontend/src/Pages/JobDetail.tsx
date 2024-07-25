import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface Job {
  job: {
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
  };
}

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`/api/v1/jobs/${id}`);
      const data = await response.json();
      setJob(data);
      console.log(data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-3xl font-bold mb-4">{job.job.title}</h1>
      <p className="text-lg mb-2">
        <span className="font-medium">Company Name:</span> {job.job.company}
      </p>
      <p className="text-lg mb-2">
        <span className="font-medium">Location:</span> {job.job.location}
      </p>
      <p className="text-lg mb-2">
        <span className="font-medium">Salary:</span> {job.job.salary}
      </p>
      <p className="text-lg mb-4">
        <span className="font-medium">Description:</span> {job.job.description}
      </p>
      <Link to="/jobs" className="text-blue-500 hover:underline">
        Back to Job List
      </Link>
    </div>
  );
};

export default JobDetail;
