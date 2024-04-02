/*
Name: Wenjie Zhou
Student ID: 301337168
Date: 2024-04-02
*/

import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "studentApp1/StudentForm";
import "./index.css";

// Consume StudentForm component from studentApp1 remote access
const App = () => (
  <div className="container">
    <h3>This is Student Application 3</h3>
    <br />
    <StudentForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
