// import React from "react";
import "./App.css";
import JobLists from "./Pages/JobLists";
import CreateJob from "./Pages/CreateJob";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="md:px-10 sm:px-0">
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
