// import React from "react";
import "./App.css";
import JobLists from "./Pages/JobLists";
import CreateJob from "./Pages/CreateJob";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/jobs" element={<JobLists />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
