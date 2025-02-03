import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TaskRow from "../components/TaskRow"; // Import TaskRow component

function InterneePage() {
  const location = useLocation();
  const email = location.state?.email || "User";
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Example task data
  const tasks = [
    {
      id: "TSK-000-2",
      category: "React Internship",
      task: "Introducing Yourself Task",
      status: "Complete",
      isLocked: true,
    },
    {
      id: "TSK-000-41",
      category: "React Internship",
      task: "Redesign Internee.pk Website",
      status: "Complete",
      isLocked: true,
    },
    {
      id: "TSK-000-42",
      category: "React Internship",
      task: "User Authentication with Firebase",
      status: "Unlocked",
      isLocked: false,
    },
    {
      id: "TSK-000-43",
      category: "React Internship",
      task: "Redux State Management",
      status: "Locked",
      isLocked: true,
    },
    {
      id: "TSK-000-44",
      category: "React Internship",
      task: "RESTful API Integration",
      status: "Locked",
      isLocked: true,
    },
    {
      id: "TSK-000-45",
      category: "React Internship",
      task: "Responsive UI Design",
      status: "Locked",
      isLocked: true,
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl focus:outline-none"
          >
            &#9776;
          </button>
          <h1 className="text-lg font-bold">
            Pakistan's Virtual Internship Platform
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white text-xl">⛶</button>
          <span className="text-sm font-medium">{email}</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarCollapsed ? "w-16" : "w-64"
          } h-full bg-gray-800 text-white transition-all duration-300`}
        >
          <div className="p-4 text-lg font-bold">
            {isSidebarCollapsed ? "IP" : "Internee.pk"}
          </div>
          <ul>
            <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center space-x-3">
              <span>🏠</span>
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="flex-grow p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-800">Home</h2>
          <hr className="my-2 border-green-600" />
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <p className="text-gray-700">
              Welcome from Internee.pk, <span className="font-bold">{email}</span>!
            </p>
          </div>

          {/* Running Task Table */}
          <div className="bg-white rounded-lg shadow-md mt-6">
            <div className="border-b p-4">
              <h3 className="text-lg font-bold text-gray-800">Your Running Task</h3>
            </div>
            <table className="w-full text-sm text-left text-gray-600">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4">#</th>
                  <th className="p-4">Task ID</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Task</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <TaskRow
                    key={task.id}
                    index={index + 1}
                    taskId={task.id}
                    category={task.category}
                    task={task.task}
                    status={task.status}
                    isLocked={task.isLocked}
                  />
                ))}
              </tbody>
            </table>
            <div className="p-4 text-center">
              <button
                className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                disabled
              >
                Claim Certificate
              </button>
              <p className="text-gray-500 text-sm mt-2">
                Complete all tasks to claim certificate
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 text-center text-sm text-gray-500 p-4">
        Copyright © 2024 <span className="text-green-600">Internee.pk</span>. All rights
        reserved.
      </footer>
    </div>
  );
}

export default InterneePage;
