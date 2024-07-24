// import React from "react";
import "./App.css";
import JobLists from "./Pages/JobLists";
import CreateJob from "./Pages/CreateJob";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

const App = () => {
	return (
		<Router>
			<div className="App">
				<nav className="bg-gray-800 p-4">
					<ul className="flex space-x-4">
						<li>
							<Link to="/" className="text-white">
								Home
							</Link>
						</li>
						<li>
							<Link to="/create-job" className="text-white">
								Create Job
							</Link>
						</li>
						<li>
							<Link to="/jobs" className="text-white">
								Job List
							</Link>
						</li>
						<li>
							<Link to="/dashboard" className="text-white">
								Dashboard
							</Link>
						</li>
					</ul>
				</nav>
				<div className="p-4">
					<Routes>
						<Route path="/create-job" element={<CreateJob />} />
						<Route path="/jobs" element={<JobLists />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
