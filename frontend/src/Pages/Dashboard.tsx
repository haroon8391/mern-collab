import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch("/api/v1/jobs");
				const data = await response.json();
				setJobs(data);
			} catch (error) {
				console.error("Error fetching jobs:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	return (
		<div className="container mx-auto p-4 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-extrabold text-gray-800 mb-6">
				Job Dashboard
			</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="space-y-4">
					{jobs.map(() => (
						<div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
							<span className="text-lg font-medium text-gray-700">
								[job.title]
							</span>
							<div className="flex space-x-2">
								<button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
									Update
								</button>
								<button className="bg-red-500 text-white px-4 py-2 rounded">
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
