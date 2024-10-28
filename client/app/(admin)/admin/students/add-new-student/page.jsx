"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddNewStudent = () => {
  const history = useRouter();

  return (
    <div className="pt-8 px-2 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <AiOutlineArrowLeft
          size={35}
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            history.push("/admin/students");
          }}
        />
      </div>
      <h6 className="text-3xl font-semibold mb-2">Add New Student</h6>
      <div className="ml-2">
        <div className="flex items-center py-4">
          <p className="w-[12%] text-start text-lg">Name *</p>
          <div className="w-[88%]">
            <Input placeholder="Enter Your Name" />
          </div>
        </div>
        <div className="flex items-center py-4">
          <p className="w-[12%] text-start text-lg">Email *</p>
          <div className="w-[88%]">
            <Input placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="flex items-center py-4">
          <p className="w-[12%] text-start text-lg">Password *</p>
          <div className="w-[88%]">
            <PasswordInput placeholder="Enter Your Password" />
          </div>
        </div>
        <div className="flex items-center py-4">
          <p className="w-[12%] text-start text-lg">Course *</p>
          <div className="w-[88%]">
            <Select data={["11th", "12th"]} />
          </div>
        </div>
        <div className="flex items-center py-4">
          <p className="w-[12%] text-start text-lg">Payment Status *</p>
          <div className="w-[88%]">
            <Select data={["Completed", "Pending"]} />
          </div>
        </div>
      </div>
      <button className="bg-footerGreen text-white w-full py-2 rounded-xl text-lg mt-4">
        Add Student
      </button>
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
      type="text"
      className="w-full pl-4 pr-10 py-1 outline-none border-b border-b-gray-500 text-gray-900 placeholder-gray-500"
      placeholder={placeholder}
    />
  );
};

const Select = ({ data }) => {
  return (
    <select className="w-full pl-4 pr-10 py-1 outline-none border-b border-b-gray-500 text-gray-900 placeholder-gray-500">
      {data?.map((e, i) => {
        return <option key={i}>{e}</option>;
      })}
    </select>
  );
};

export default AddNewStudent;
