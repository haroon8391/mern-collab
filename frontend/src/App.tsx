import "./App.css";
import JobLists from "./Pages/JobLists";
import CreateJob from "./Pages/CreateJob";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import UpdateJob from "./Pages/UpdateJob";
import ApplyJob from "./Pages/ApplyJob";
import Navbar from "./Components/Navbar";
import AuthLayout from "./Components/AuthLayout";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="md:px-10 sm:px-0">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/create-job"
							element={
								<AuthLayout authentication>
									<CreateJob />
								</AuthLayout>
							}
						/>
						<Route
							path="/jobs"
							element={
								<AuthLayout authentication={false}>
									<JobLists />
								</AuthLayout>
							}
						/>
						<Route
							path="/update-job/:id"
							element={
								<AuthLayout authentication>
									<UpdateJob />
								</AuthLayout>
							}
						/>
						<Route
							path="/jobs/:id"
							element={
								<AuthLayout authentication>
									<JobDetails />
								</AuthLayout>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<AuthLayout authentication>
									<Dashboard />
								</AuthLayout>
							}
						/>
						<Route
							path="/jobs/apply"
							element={
								<AuthLayout authentication>
									<ApplyJob />
								</AuthLayout>
							}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
