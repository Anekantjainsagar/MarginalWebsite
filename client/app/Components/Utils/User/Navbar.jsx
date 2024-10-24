"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [data, setData] = useState([
    { title: "Home", route: "/" },
    { title: "Dashboard", route: "/user/dashboard" },
  ]);
  const pathname = usePathname();
  const history = useRouter();

  useEffect(() => {
    if (pathname?.includes("user")) {
      if (data?.length != 4) {
        setData([
          ...data,
          { title: "Change Password", route: "/user/change-password" },
          { title: "Logout", route: "/login" },
        ]);
      }
    } else {
      setData([
        { title: "Home", route: "/" },
        { title: "Dashboard", route: "/user/dashboard" },
      ]);
    }
  }, [pathname]);

  return (
    <div className="bg-gradient-to-tr from-newDarkGreen to-gray-800 px-4 md:px-8 h-[9vh] flex items-center justify-between">
      <Image
        src={"/logo.png"}
        width={1000}
        height={1000}
        alt="Logo"
        onClick={() => history.push("/")}
        className="w-[18vw] md:w-[8vw] cursor-pointer"
      />
      <div className="flex items-center text-white text-sm md:text-lg gap-x-4 md:gap-x-8">
        {data.map((e, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                if (e?.route) {
                  history.push(e?.route);
                } else {
                }
              }}
              className={`uppercase cursor-pointer ${
                pathname == e?.route && "border-b"
              }`}
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
