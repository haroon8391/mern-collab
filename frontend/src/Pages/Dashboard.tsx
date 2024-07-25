import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Job {
	id: string; // Adjust type based on your backend data
	title: string;
	description: string;
	location: string;
	createdAt: string;
	// Add other fields if necessary
}

const Dashboard: React.FC = () => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch("/api/v1/jobs");
				const data = await response.json();
				const sortedJobs = data.sort((a: Job, b: Job) =>
					a.createdAt > b.createdAt ? -1 : 1
				);
				setJobs(sortedJobs);
			} catch (error) {
				console.error("Error fetching jobs:", error);
				setError("Failed to load jobs. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	const handleDelete = async (id: string) => {
		const confirmDelete = window.confirm("Are you sure you want to delete?");

		if (!confirmDelete) return;

		try {
			await fetch(`/api/v1/jobs/${id}`, {
				method: "DELETE",
			});
			setJobs(jobs.filter((job) => job.id !== id));
		} catch (error) {
			console.error("Error deleting job:", error);
			alert("Failed to delete job. Please try again later.");
		}
	};

	return (
		<div className="container mx-auto p-4 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-extrabold text-gray-800 mb-6">
				Job Dashboard
			</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="space-y-4">
					{error && <p className="text-red-500">{error}</p>}
					{jobs.map((job) => (
						<div
							className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
							key={job.id}
						>
							<span className="text-lg font-medium text-gray-700">
								{job.title} -- {job.location}
							</span>
							<div className="flex space-x-2">
								<button
									onClick={() => navigate(`/update-job/${job.id}`)}
									className="bg-blue-700 text-white px-4 py-2 rounded mr-2 hover:bg-blue-500"
								>
									Update
								</button>
								<button
									onClick={() => handleDelete(job.id)}
									className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500"
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dashboard;
