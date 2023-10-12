import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Account() {
  return (
    <div className="overflow-x-hidden h-full shadow-lg">
      <header className="p-4 mb-4 rounded-lg ">
        <h1 className="text-[26px] font-[700] leading-4 ">Profile Settings</h1>
      </header>
      <div className="flex h-full  bg-white border-slate-200 border-b">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Account;
