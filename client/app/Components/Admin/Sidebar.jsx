"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const history = useRouter();

  return (
    <div className="flex flex-col w-[15vw] items-center justify-between py-5">
      <div className="w-full flex flex-col items-center">
        {" "}
        <Image
          width={1000}
          height={1000}
          src={"/logo-black.png"}
          alt={"Logo"}
          className="w-8/12 mb-12 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            history("/admin/dashboard");
          }}
        />
        <div className="flex flex-col items-center text-xl font-semibold w-full">
          {[
            { name: "Dashboard", route: "/admin/dashboard" },
            { name: "Students", route: "/admin/students" },
          ].map((e, i) => {
            return (
              <p
                key={i}
                className={`mb-3 cursor-pointer w-[60%] rounded-xl text-center py-2 ${
                  pathname === e?.route ? "bg-footerGreen text-white" : ""
                }`}
                onClick={() => {
                  history.push(e?.route);
                }}
              >
                {e?.name}
              </p>
            );
          })}
        </div>
      </div>
      <p
        className={`mb-3 cursor-pointer font-semibold text-red-500 w-[55%] rounded-xl text-xl text-center py-1`}
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
      >
        Logout
      </p>
    </div>
  );
};

export default Sidebar;
