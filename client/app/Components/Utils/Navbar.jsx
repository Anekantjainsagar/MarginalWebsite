"use client";
import Image from "next/image";
import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const history = useRouter();
  const pathname = usePathname();
  const data = [
    { name: "About Us", route: "/about" },
    {
      name: "Activities",
      routes: [{ name: "About Us", route: "/" }],
      route: "/activities",
    },
    { name: "Class 11th", routes: [{ name: "About Us", route: "/" }] },
    { name: "Class 12th", routes: [{ name: "About Us", route: "/" }] },
    { name: "CUET", routes: [{ name: "About Us", route: "/" }] },
    {
      name: "CA Foundation",
      routes: [{ name: "About Us", route: "/" }],
      route: "/ca-foundation",
    },
    { name: "IPMAT", routes: [{ name: "About Us", route: "/" }] },
    { name: "Graduation Programs" },
  ];

  return (
    <div className="px-8 border-b border-b-gray-300/5 h-[12vh] flex items-center text-white justify-between w-full fixed top-0 left-0 backdrop-blur-sm z-50">
      <Image
        src={"/logo.png"}
        width={1000}
        height={1000}
        alt="Logo"
        onClick={() => history.push("/")}
        className="w-[10vw] cursor-pointer"
      />
      <div className="flex items-center">
        {data?.map((e, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer navText ${
                pathname?.includes(e?.route) && "text-textGreen"
              } flex items-center`}
              onClick={() => {
                if (e?.route) {
                  history.push(e?.route);
                }
              }}
            >
              <span>{e?.name}</span>
              {e?.routes && (
                <MdOutlineKeyboardArrowDown className="text-2xl ml-2" />
              )}
            </div>
          );
        })}
      </div>
      <div className="gap-x-5 flex items-center">
        <IoCall className="text-[40px] border-2 aspect-square rounded-full p-2 cursor-pointer" />
        <IoIosSearch className="text-[40px] border-2 aspect-square rounded-full p-2 cursor-pointer" />
        <button
          onClick={() => history.push("/login")}
          className="px-8 py-2 rounded-2xl text-lg font-semibold text-newDarkGreen bg-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
