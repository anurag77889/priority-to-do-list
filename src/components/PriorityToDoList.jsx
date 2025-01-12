import React, { useState } from "react";

function PriorityToDoList() {
  const [formData, setFormData] = useState({
    taskDescription: "",
    priority: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        description: formData.taskDescription,
        priority: formData.priority,
      },
    ]);

    setFormData({
      taskDescription: "",
      priority: "Low",
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">To-Do List</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Description
            </label>
            <input
              type="text"
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              placeholder="Enter task"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority Level
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Task
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Task List : </h3>
          <ul className="space y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm"
              >
                <span className="text-lg font-medium">{task.description}</span>
                <span className="text-sm text-gray-500">{task.priority}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PriorityToDoList;
