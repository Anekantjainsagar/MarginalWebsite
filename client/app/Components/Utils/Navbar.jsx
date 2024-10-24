"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
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
    <div className="px-2 md:px-8 border-b border-b-gray-300/5 h-fit md:py-0 py-2 md:h-[12vh] flex items-center text-white justify-between w-full fixed top-0 left-0 backdrop-blur-sm z-50">
      <Image
        src={"/logo.png"}
        width={1000}
        height={1000}
        alt="Logo"
        onClick={() => history.push("/")}
        className="w-[28vw] md:w-[10vw] cursor-pointer"
      />
      <div className="md:flex items-center hidden">
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
      <div className="gap-x-5 md:flex items-center hidden">
        <IoCall className="text-[40px] border-2 aspect-square rounded-full p-2 cursor-pointer" />
        <button
          onClick={() => history.push("/login")}
          className="px-8 py-2 rounded-2xl text-lg font-semibold text-newDarkGreen bg-white"
        >
          Login
        </button>
      </div>
      <CgMenuRightAlt
        onClick={() => {
          setShowNav(true);
        }}
        className="md:hidden text-white text-2xl"
      />
      {showNav && (
        <div className="flex-col bg-gradient-to-b py-5 px-5 from-newDarkGreen to-gray-800 flex items-center justify-between w-full h-[100vh] absolute top-0 left-0">
          <div className="flex justify-end w-full text-xl">
            <AiOutlineClose
              onClick={() => {
                setShowNav(false);
              }}
            />
          </div>{" "}
          <div className="flex flex-col items-center">
            {data?.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`cursor-pointer navText my-2 ${
                    pathname?.includes(e?.route) && "text-textGreen"
                  } flex items-center`}
                  onClick={() => {
                    if (e?.route) {
                      history.push(e?.route);
                      setShowNav(false);
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
            <div className="flex gap-x-4">
              <IoCall className="text-[35px] md:text-[40px] border aspect-square rounded-full p-2 cursor-pointer my-2" />
            </div>
            <button
              onClick={() => {
                history.push("/login");
                setShowNav(false);
              }}
              className="px-10 py-1.5 rounded-lg text-base font-medium text-newDarkGreen bg-white my-2"
            >
              Login
            </button>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
