"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const history = useRouter();

  return (
    <div className="bg-gradient-to-tr from-newDarkGreen to-gray-800 px-8 h-[9vh] flex items-center justify-between">
      <Image
        src={"/logo.png"}
        width={1000}
        height={1000}
        alt="Logo"
        onClick={() => history.push("/")}
        className="w-[8vw] cursor-pointer"
      />
      <div className="flex items-center text-white text-lg gap-x-8">
        {[
          { title: "Home", route: "/" },
          { title: "Dashboard", route: "/user/dashboard" },
        ].map((e, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                history.push(e?.route);
              }}
              className="uppercase cursor-pointer"
            >
              {e?.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
