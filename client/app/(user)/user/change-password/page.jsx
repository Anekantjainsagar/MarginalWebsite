"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserDasbboard = () => {
  return (
    <div className="h-[85vh] overflow-hidden bg-gradient-to-tr from-gray-800 via-newDarkGreen to-gray-800 px-[10vw] pt-[4vw] flex justify-between">
      <div className="bg-white w-full rounded-md px-[4vw] py-8">
        <h2 className="text-4xl font-semibold text-center">
          Edit Your Profile
        </h2>
        <div>
          <div className="flex items-center gap-x-5 py-4">
            <p className="w-[15%] text-end text-lg">Name *</p>
            <div className="w-[85%]">
              <Input placeholder="Enter Your Name" />
            </div>
          </div>
          <div className="flex items-center gap-x-5 py-4">
            <p className="w-[15%] text-end text-lg">Username *</p>
            <div className="w-[85%]">
              <Input placeholder="Enter Your Username" />
            </div>
          </div>
          <div className="flex items-center gap-x-5 py-4">
            <p className="w-[15%] text-end text-lg">Email *</p>
            <div className="w-[85%]">
              <Input placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="flex items-center gap-x-5 py-4">
            <p className="w-[15%] text-end text-lg">Current Password *</p>
            <div className="w-[85%]">
              <PasswordInput placeholder="Enter Your Password" />
            </div>
          </div>
          <div className="flex items-center gap-x-5 py-4">
            <p className="w-[15%] text-end text-lg">New Password *</p>
            <div className="w-[85%]">
              <PasswordInput placeholder="Enter New Password" />
            </div>
          </div>
          <div className="flex items-center gap-x-5 py-4">
            <p className="w-[15%] text-end text-lg">Confirm Password *</p>
            <div className="w-[85%]">
              <PasswordInput placeholder="Re-Enter New Password" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-2">
          <button className="bg-newDarkGreen text-white px-10 py-2 rounded-xl text-xl font-semibold">
            Save
          </button>
          <button className="bg-newDarkGreen text-white px-10 py-2 rounded-xl text-xl font-semibold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const PasswordInput = ({ placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle password visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <input
        id="password"
        type={isVisible ? "text" : "password"}
        className="w-full pl-4 pr-10 py-1 outline-none border-b border-b-gray-500 text-gray-900 placeholder-gray-500"
        placeholder={placeholder}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 text-xl flex items-center pr-3 text-gray-600"
        onClick={toggleVisibility}
      >
        {isVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

const Input = ({ placeholder }) => {
  return (
    <input
      type={"text"}
      className="w-full pl-4 pr-10 py-1 outline-none border-b border-b-gray-500 text-gray-900 placeholder-gray-500"
      placeholder={placeholder}
    />
  );
};

export default UserDasbboard;
