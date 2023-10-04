import React from "react";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <ul className="mt-4">
          <li className="flex items-center px-2 py-1">
            <a href="/" className="text-gray-700">
              Home
            </a>
          </li>
          <li className="flex items-center px-2 py-1">
            <a href="/users" className="text-gray-700">
              Users
            </a>
          </li>
          <li className="flex items-center px-2 py-1">
            <a href="/projects" className="text-gray-700">
              Projects
            </a>
          </li>
          <li className="flex items-center px-2 py-1">
            <a href="/calendar" className="text-gray-700">
              Calendar
            </a>
          </li>
          <li className="flex items-center px-2 py-1">
            <a href="/documents" className="text-gray-700">
              Documents
            </a>
          </li>
          <li className="flex items-center px-2 py-1">
            <a href="/reports" className="text-gray-700">
              Reports
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
