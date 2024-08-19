import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import jobService from "../services/jobService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApplyJob: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [city, setCity] = useState("");
  const [qualities, setQualities] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const jobApplication = {
        jobId: id,
        name,
        education,
        city,
        qualities,
        experience,
      };
      const data = jobService.apply(jobApplication);
      console.log("Job Applied Successfully " + data);
      toast("Job Applied Successfully", { type: "success" });
      navigate("/jobs");
    } catch (err) {
      console.log("Error while applying for job " + err);
      toast("Could not apply for job. Try Again.", { type: "error" });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-blue-100 shadow-md rounded-md mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="education" className="text-lg font-medium mb-2">
            Education
          </label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-lg font-medium mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="experience" className="text-lg font-medium mb-2">
            How many years of experience do you have?
          </label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="reason" className="text-lg font-medium mb-2">
            Why do you think you are the best for this job?
          </label>
          <textarea
            id="reason"
            value={qualities}
            onChange={(e) => setQualities(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
        >
          Submit
        </button>
      </form>

      <div className="text-center mt-4">
        <Link
          to="/jobs"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Go to Jobs
        </Link>
      </div>
    </div>
  );
};

export default ApplyJob;
