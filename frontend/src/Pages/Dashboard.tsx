import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../services/jobService";
import { useSelector } from "react-redux";

interface Job {
	id: string; // Adjust type based on your backend data
	title: string;
	description: string;
	location: string;
	createdAt: string;
	applicants: any[];
}

const Dashboard: React.FC = () => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [showApplicants, setShowApplicants] = useState(false);

	const isAuthenticated = useSelector(
		(state: any) => state.authSlice.isAuthenticated
	);
	const userData = useSelector((state: any) => state.authSlice.userData);
	console.log(isAuthenticated);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const data = await jobService.getAll(userData.userId);
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
			await jobService.remove(id);
			setJobs(jobs.filter((job) => job.id !== id));
		} catch (error) {
			console.error("Error deleting job:", error);
			setError("Failed to delete job. Please try again later.");
		}
	};

	return (
		<div className="container mx-auto p-4 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-extrabold text-gray-800 mb-6">
				Job Dashboard
			</h1>
			{loading ? (
				<div className="flex justify-center items-center min-h-[50vh]">
					<svg
						className="animate-spin h-5 w-5 text-gray-800"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8v8H4z"
						></path>
					</svg>
				</div>
			) : (
				<div className="space-y-4">
					{error && <p className="text-red-500">{error}</p>}

					<div className="overflow-x-auto">
						<table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="py-2 px-4 border-b border-gray-200">Title</th>
									<th className="py-2 px-4 border-b border-gray-200">
										Location
									</th>
									<th className="py-2 px-4 border-b border-gray-200">
										Created At
									</th>
									<th className="py-2 px-4 border-b border-gray-200">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{jobs.map((job) => (
									<>
										<tr
											key={job.id}
											className="hover:bg-gray-100 transition duration-150"
										>
											<td className="py-2 px-4 border-b border-gray-200 text-center">
												{job.title}
											</td>
											<td className="py-2 px-4 border-b border-gray-200 text-center">
												{job.location}
											</td>
											<td className="py-2 px-4 border-b border-gray-200 text-center">
												{new Date(job.createdAt).toLocaleDateString()}
											</td>
											<td className="py-2 px-4 border-b border-gray-200 text-center">
												<div className="flex space-x-2 justify-center">
													<button
														onClick={() => navigate(`/update-job/${job.id}`)}
														className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
														aria-label={`Update ${job.title}`}
													>
														Update
													</button>
													<button
														onClick={() => handleDelete(job.id)}
														className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500"
														aria-label={`Delete ${job.title}`}
													>
														Delete
													</button>
													<button
														onClick={() => setShowApplicants(true)}
														className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-500"
														aria-label={`Delete ${job.title}`}
													>
														View Applicants
													</button>
												</div>
											</td>
										</tr>
										{showApplicants && (
											<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity">
												<div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:w-1/2">
													<button
														className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
														aria-label="Close"
														onClick={() => setShowApplicants(false)}
													>
														&times;
													</button>
													<h2 className="text-2xl font-bold mb-6 text-center">
														Applicants for Job
													</h2>
													<ul className="space-y-4">
														{job.applicants.map((applicant: any) => (
															<li
																key={applicant.id}
																className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
															>
																<p className="mb-2">
																	<strong>Name:</strong> {applicant.name}
																</p>
																<p className="mb-2">
																	<strong>Education:</strong>{" "}
																	{applicant.education}
																</p>
																<p className="mb-2">
																	<strong>City:</strong> {applicant.city}
																</p>
															</li>
														))}
													</ul>
												</div>
											</div>
										)}
									</>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
