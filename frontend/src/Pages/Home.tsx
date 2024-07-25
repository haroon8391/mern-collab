import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			<header className="text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					Welcome to Job Portal
				</h1>
				<p className="text-xl text-gray-600">Your gateway to a better career</p>
			</header>
			<main className="mt-8">
				<Link
					to="/jobs"
					className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
				>
					Explore Jobs
				</Link>
			</main>
		</div>
	);
};

export default Home;
