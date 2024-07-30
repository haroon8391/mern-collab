// src/components/JobPostForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../services/jobService";

const JobPostForm: React.FC = () => {
  const navigate = useNavigate();

  // State variables for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [job_category, setJob_category] = useState("");
  const [job_experience, setJob_experience] = useState("");
  const [job_vacancy, setJob_vacancy] = useState("");
  const [job_deadline, setJob_deadline] = useState("");
  const [job_type, setJob_type] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const jobPost = {
      title,
      description,
      salary,
      company,
      location,
      job_category,
      job_experience,
      job_vacancy,
      job_deadline,
      job_type,
    };

    try {
      const data = await jobService.create(jobPost);
      console.log("Job Posted Successfully " + data);
      navigate("/jobs");
    } catch (err) {
      console.log("Error while posting job " + err);
    }

    console.log(jobPost);
  };

  return (
    <div className="w-full p-6 bg-gray-100 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Job Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium mb-2">
            Job Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="salary" className="text-lg font-medium mb-2">
            Job Salary
          </label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="company" className="text-lg font-medium mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-lg font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="jobCategory" className="text-lg font-medium mb-2">
            Job Category
          </label>
          <input
            type="text"
            id="jobCategory"
            value={job_category}
            onChange={(e) => setJob_category(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="jobExperience" className="text-lg font-medium mb-2">
            Experience Required
          </label>
          <input
            type="number"
            id="jobExperience"
            value={job_experience}
            onChange={(e) => setJob_experience(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="jobVacancy" className="text-lg font-medium mb-2">
            Job Vacancy
          </label>
          <input
            type="number"
            id="jobVacancy"
            value={job_vacancy}
            onChange={(e) => setJob_vacancy(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="jobDeadline" className="text-lg font-medium mb-2">
            Job Deadline
          </label>
          <input
            type="date"
            id="jobDeadline"
            value={job_deadline}
            onChange={(e) => setJob_deadline(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="jobType" className="text-lg font-medium mb-2">
            Job Type
          </label>
          <select
            id="jobType"
            value={job_type}
            onChange={(e) => setJob_type(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Job Type</option>
            <option value="internship">Internship</option>
            <option value="part-time">Part Time</option>
            <option value="full-time">Full Time</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to to-pink-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:font-bold"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
