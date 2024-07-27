import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthLayout, Navbar } from "./Components";
import {
	ApplyJob,
	CreateJob,
	Dashboard,
	Home,
	JobDetails,
	JobLists,
	Login,
	Register,
	UpdateJob,
} from "./Pages";

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
						<Route
							path="/register"
							element={
								<AuthLayout authentication={false}>
									<Register />
								</AuthLayout>
							}
						/>
						<Route
							path="/login"
							element={
								<AuthLayout authentication={false}>
									<Login />
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
