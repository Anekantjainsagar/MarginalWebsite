"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ViewOrder = ({ params }) => {
  const history = useRouter();
  const [status, setStatus] = useState();
  const { id } = params;

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
        <select
          className={`outline-none border px-4 py-0.5 rounded-lg mt-2 ${status}`}
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="UnderDesign" className="UnderDesign">
            Under Design
          </option>
          <option value="NewOrder" className="NewOrder">
            New Order
          </option>
          <option value="Completed" className="Completed">
            Completed
          </option>
          <option value="PaymentFailed" className="PaymentFailed">
            Payment Failed
          </option>
        </select>
      </div>
      <div className="ml-2">
        <h6 className="text-2xl font-semibold mb-2">Student&apos;s details</h6>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Name: </span>
          Anekant Jain
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Password: </span>
          1234567890
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Student ID: </span>
          #123456
        </p>
        <h6 className="text-2xl font-semibold mb-2 mt-5">Course details</h6>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Course opted: </span>
          CUET
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Duration: </span>1 year
        </p>
        <h6 className="text-2xl font-semibold mb-2 mt-5">Payment details</h6>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Payment Status: </span>
          Completed
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Payment method: </span>
          Credit Card
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Payment Date: </span>
          25-12-2024
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Amount Received: </span>
          ₹40,000.00
        </p>
        <p className="text-lg mb-1">
          <span className="font-semibold mr-0.5 ml-1.5">Payment ID: </span>
          #098765
        </p>
      </div>
    </div>
  );
};

export default ViewOrder;
