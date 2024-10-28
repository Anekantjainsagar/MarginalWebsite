"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          {pathname === "/admin/dashboard" ? "Admin Dashboard" : "Students"}
        </h1>
        <p className="text-lg text-gray-800">Welcome, Admin</p>
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default Topbar;
