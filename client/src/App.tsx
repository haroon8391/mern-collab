import React from "react";
import "./App.css";
import JobLists from "./Pages/JobLists";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobLists />
    </div>
  );
}

export default App;
