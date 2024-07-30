import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jobService from "../services/jobService";
import { toast } from "react-toastify";
import Job from "../types/JobTypes";

const UpdateJob = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [salary, setSalary] = useState("");
	const [location, setLocation] = useState("");
	const [company, setCompany] = useState("");

	useEffect(() => {
		const fetchJob = async () => {
			try {
				const response = await fetch(`/api/v1/jobs/${id}`);
				const jobData = await response.json();

				setTitle(jobData.title);
				setDescription(jobData.description);
				setSalary(jobData.salary);
				setLocation(jobData.location);
				setCompany(jobData.company);
			} catch (error) {
				console.error("Error fetching job:", error);
				toast("Could not fetch job", { type: "error" });
			}
		};

		fetchJob();
	}, [id]);

	const handleJobUpdate = async (e: React.FormEvent) => {
		e.preventDefault();
		const job = { title, description, salary, location, company };

		try {
			const data = await jobService.update(id as string, job as Job);
			console.log("Job Updated Successfully ", data);
			toast("Job Updated Successfully", { type: "success" });
			navigate("/jobs");
		} catch (err) {
			console.log("Error while updating job ", err);
			toast("Some error occured while updating job. Try Again.", {
				type: "error",
			});
		}
	};

	return (
		<div className="w-full p-6 bg-gray-100 shadow-md rounded-md">
			<h1 className="text-2xl font-bold mb-4 text-center">Create Job Post</h1>
			<form onSubmit={handleJobUpdate} className="space-y-4">
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
					<label htmlFor="location" className="text-lg font-medium mb-2">
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

				<div className="flex justify-center">
					<button
						type="submit"
						className="px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to to-pink-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
					>
						Update Job
					</button>
				</div>
			</form>
		</div>
	);
};
export default UpdateJob;
