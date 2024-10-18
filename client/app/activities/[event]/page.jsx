"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Activity = () => {
  const history = useRouter();

  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black pt-[8vw] pb-10 px-[3vw] flex flex-col items-center">
      <h4 className="text-3xl font-semibold text-center mb-5 text-white">
        Event
      </h4>
      <div className="px-[4vw] flex items-start justify-between text-white">
        <Image
          src="/activities/activity.png"
          width={1000}
          height={1000}
          alt="Activity"
          className="w-[47%] h-[40vh] object-cover rounded-2xl"
        />
        <div className="w-6/12 text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            poseure, nisl eget fringilla pretium, massa sem consequat sapien,
            sit amet bibendum ante nunc ac nulla. Sed eget ultricies magna.
            Phasellus sapien felis, commodo vitae suscipit molestie, molestie in
            purus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            poseure, nisl eget fringilla pretium, massa sem consequat sapien,
            sit amet bibendum ante nunc ac nulla. Sed eget ultricies magna.
            Phasellus sapien felis, commodo vitae suscipit molestie, molestie in
            purus.
          </p>
        </div>
      </div>
      <button
        onClick={() => history.push("/activities")}
        className="text-newDarkGreen text-xl font-medium bg-white px-12 py-2.5 rounded-xl mt-10"
      >
        Back
      </button>
    </div>
  );
};

export default Activity;
