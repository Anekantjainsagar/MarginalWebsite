"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const Block = () => {
  const history = useRouter();

  return (
    <div
      className="bg-newLightGreen rounded-2xl cursor-pointer"
      onClick={() => {
        history.push(`/activities/event`);
      }}
    >
      <div className="h-[30vh] md:h-[50vh] relative">
        <Image
          src="/activities/activity.png"
          width={1000}
          height={1000}
          alt="Activity"
          className="rounded-2xl h-full object-cover"
        />
        <div className="bg-gradient-to-t from-newLightGreen from-[0%] to-transparent absolute top-0 left-0 w-full h-full"></div>
      </div>
      <p className="text-gray-900 text-lg md:text-2xl text-center py-2 font-medium">
        Event
      </p>
    </div>
  );
};

export default Block;
