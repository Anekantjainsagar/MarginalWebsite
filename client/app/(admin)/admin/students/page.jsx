"use client";
import React, { useContext, useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Context from "@/app/Context/Context";
import { IoAddOutline } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

const Students = () => {
  const history = useRouter();
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const context = useContext(Context);

  return (
    <div>
      <div className="flex items-center justify-between w-full relative my-2">
        <button
          className="flex items-center bg-footerGreen text-white text-lg px-7 py-2 rounded-xl"
          onClick={() => {
            history.push("/admin/students/add-new-student");
          }}
        >
          <IoAddOutline className="text-white text-xl mr-2" /> Add New{" "}
        </button>
        <div className="flex items-center">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Enter student name"
            className="border outline-none py-1.5 px-4 border-black rounded-lg mx-2 w-[20vw]"
          />
          <AiOutlineFilter
            size={30}
            onClick={(e) => {
              e.preventDefault();
              setShowFilter(!showFilter);
            }}
            className="cursor-pointer"
          />
          {showFilter ? (
            <div className="w-[40%] absolute right-2 top-[90%] rounded-md bg-black p-3">
              <p
                value="UnderDesign"
                className="text-center py-0.5 UnderDesign"
                onClick={(e) => {
                  e.preventDefault();
                  context.setFilter("UnderDesign");
                }}
              >
                Under Design
              </p>
              <p
                value="NewOrder"
                className="text-center py-0.5 NewOrder"
                onClick={(e) => {
                  e.preventDefault();
                  context.setFilter("NewOrder");
                }}
              >
                New Order
              </p>
              <p
                value="Completed"
                className="text-center py-0.5 Completed"
                onClick={(e) => {
                  e.preventDefault();
                  context.setFilter("Completed");
                }}
              >
                Completed
              </p>
              <p
                value="PaymentFailed"
                className="text-center py-0.5 PaymentFailed"
                onClick={(e) => {
                  e.preventDefault();
                  context.setFilter("PaymentFailed");
                }}
              >
                Payment Failed
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-3 h-[75vh] overflow-y-auto">
        {[
          {
            name: "Anekant Jain",
            course: "CUET",
            duration: "1 Year",
            payment: "Completed",
            status: "Ongoing",
          },
          {
            name: "Anekant Jain",
            course: "CUET",
            duration: "1 Year",
            payment: "Completed",
            status: "Ongoing",
          },
          {
            name: "Anekant Jain",
            course: "CUET",
            duration: "1 Year",
            payment: "Completed",
            status: "Ongoing",
          },
          {
            name: "Anekant Jain",
            course: "CUET",
            duration: "1 Year",
            payment: "Completed",
            status: "Ongoing",
          },
        ]?.map((e, i) => {
          return <Block data={e} key={i} />;
        })}
        {context?.size * context?.page <= context?.totalOrders ? (
          <button
            className="text-white bg-black px-4 py-0.5 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              context?.setPage(context?.page + 1);
              context?.getOrders();
            }}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();
  const [status, setStatus] = useState(data.status);

  return (
    <>
      <Toaster />
      <div
        onClick={(e) => {
          e.preventDefault();
          history.push(`/admin/students/1`);
        }}
        className="w-[98%] text-white bg-aquaGreen mb-2 rounded-xl px-6 py-4 flex items-center justify-between mx-auto cursor-pointer"
      >
        <div className="text-xl">
          <p className="font-semibold text-2xl mb-1">{data.name}</p>
          <p>
            Course Name:- <span className="font-semibold">{data?.course}</span>
          </p>
          <p>
            Duration:- <span className="font-semibold">{data?.duration}</span>
          </p>
          <p>
            Payment Status:-{" "}
            <span className="font-semibold">{data?.payment}</span>
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2 text-end text-xl">
            Order no : #12345
          </p>
          <select
            className={`outline-none text-black px-6 py-1 rounded-lg ${status}`}
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
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
      </div>
    </>
  );
};

export default Students;
