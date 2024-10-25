"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";

const UserDasbboard = () => {
  return (
    <div className="h-[85vh] overflow-hidden bg-gradient-to-tr from-gray-800 via-newDarkGreen to-gray-800 px-[10vw] pt-[4vw] flex justify-between">
      <div className="bg-white w-full rounded-md px-9 py-8 overflow-y-auto">
        <h4 className="text-2xl font-semibold">
          GSFC - 2024 - Bhopal - December
        </h4>
        <div className="flex items-center pt-1">
          <h6 className="text-2xl">Mentors:</h6>
          <div className="text-xl flex items-center font-semibold gap-x-3 mx-5">
            XYZ Sir
            <p className="flex items-center font-normal">
              <AiOutlinePhone className="mr-1" />
              1234567890
            </p>
          </div>
          <div className="h-[30px] w-[1px] bg-black/30"></div>
          <div className="text-xl flex items-center font-semibold gap-x-3 mx-5">
            XYZ Sir
            <p className="flex items-center font-normal">
              <AiOutlinePhone className="mr-1" />
              1234567890
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black/30 my-5"></div>
        <div>
          <h6 className="text-2xl font-medium">Rewind Classes</h6>
          <div>
            <div className="grid grid-cols-2 text-gray-700 font-medium py-2 px-3">
              <p>TITLE</p>
              <p>LAST MODIFIED</p>
            </div>
            <div>
              <Block />
              <Block />
              <Block />
              <Block />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black/30 my-5"></div>
        <div>
          <h6 className="text-2xl font-medium">Orientation</h6>
          <div className="gap-x-4 flex items-center mt-3">
            <Image
              alt="Youtube thumbnail"
              width={1000}
              height={1000}
              className="w-3/12"
              src="/user/yt.png"
            />
          </div>
        </div>
        <div className="h-[1px] w-full bg-black/30 my-5"></div>
        <div>
          <h6 className="text-2xl font-medium">Materials</h6>
        </div>
      </div>
    </div>
  );
};

const Block = () => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        window.open(
          "https://drive.google.com/file/d/1iRMf7ARSMTwsrwsivLTGjRqAVka28__n/view?usp=drive_link",
          "__blank"
        );
      }}
      className="grid grid-cols-2 py-1.5 border-t border-t-gray-400/30 px-4 cursor-pointer"
    >
      <div className="flex items-center gap-x-2">
        <FaVideo className="text-[#da301f]" />
        <p>Video 1</p>
      </div>
      <p>Dec 1, 12:35 PM, MAC</p>
    </div>
  );
};

export default UserDasbboard;
