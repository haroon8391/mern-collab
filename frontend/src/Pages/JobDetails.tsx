import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import jobService from "../services/jobService";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  company: string;
  salary: string;
}

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const jobDetails = await jobService.getOne(id);
      setJob(jobDetails);
      console.log(jobDetails);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{job.title}</h1>
      <p className="text-lg mb-2">
        <span className="font-medium">Company Name:</span> {job.company}
      </p>
      <p className="text-lg mb-2">
        <span className="font-medium">Location:</span> {job.location}
      </p>
      <p className="text-lg mb-2">
        <span className="font-medium">Salary:</span> {job.salary}
      </p>
      <p className="text-lg mb-4">
        <span className="font-medium">Description:</span> {job.description}
      </p>
      <div className="flex justify-center mb-4 text-white py-2 rounded-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:cursor-pointer">
        <Link to={`/jobs/apply/${id}`}>Apply</Link>
      </div>
      <div className="flex justify-center">
        <Link to="/jobs" className="text-blue-500 hover:underline text-center">
          Back to Job List
        </Link>
      </div>
    </div>
  );
};

export default JobDetail;
