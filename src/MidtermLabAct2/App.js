import React, { useState } from "react"; // Import useState from React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom

import TaskListView from "./Components/TaskListView"; // Import the TaskListView component
import AddTaskView from "./Components/AddTaskView"; // Import the AddTaskView component
import Navbar from "./Components/Navbar"; // Import the Navbar component

function App() {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks

  // Function to add a new task
  const addTask = (newTask) => setTasks(t =>[...t, newTask]); // Add new task to the existing list
  // Function to delete a task by index
  const deleteTask = (indexToDelete) =>
    setTasks(tasks.filter((_, index) => index !== indexToDelete));

  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <div className="container mt-4">
        <Routes>
          {/* View Tasks */}
          <Route
            path="/"
            element={<TaskListView tasks={tasks} deleteTask={deleteTask} />}
          />

          {/* Add Task */}
          <Route 
            path="/add"
            element={<AddTaskView addTask={addTask} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;