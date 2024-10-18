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
        history.push(`/activities/event`)
      }}
    >
      <Image
        src="/activities/activity.png"
        width={1000}
        height={1000}
        alt="Activity"
        className="rounded-2xl"
      />
      <p className="text-gray-900 text-2xl text-center py-2 font-medium">
        Event
      </p>
    </div>
  );
};

export default Block;
