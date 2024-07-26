import "./App.css";
import JobLists from "./Pages/JobLists";
import CreateJob from "./Pages/CreateJob";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import UpdateJob from "./Pages/UpdateJob";
import ApplyJob from "./Pages/ApplyJob";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="md:px-10 sm:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/jobs" element={<JobLists />} />
            <Route path="/update-job/:id" element={<UpdateJob />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs/apply" element={<ApplyJob />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
