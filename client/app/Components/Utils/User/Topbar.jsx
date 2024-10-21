import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="bg-white h-[6vh] flex items-center gap-x-8 px-8">
      <p className="flex items-center gap-x-1.5">
        <IoCallOutline />
        7898870504
      </p>
      <p className="flex items-center gap-x-1.5">
        <CiMail />
        aanyajoshi2004@gmail.com
      </p>
    </div>
  );
};

export default Topbar;
