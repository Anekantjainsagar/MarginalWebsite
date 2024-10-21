"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Activity = () => {
  const history = useRouter();

  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black pt-[18vw] md:pt-[8vw] pb-10 px-[3vw] flex flex-col items-center">
      <h4 className="text-xl md:text-3xl font-semibold text-center mb-3 md:mb-5 text-white">
        Event
      </h4>
      <div className="px-[2vw] md:px-[4vw] flex md:flex-row flex-col items-start justify-between text-white">
        <Image
          src="/activities/activity.png"
          width={1000}
          height={1000}
          alt="Activity"
          className="md:w-[47%] h-[35vh] md:h-[40vh] object-cover rounded-2xl"
        />
        <div className="md:w-6/12 md:mt-0 mt-2 text-sm md:text-xl">
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
        className="text-newDarkGreen md:text-xl font-medium bg-white px-12 py-2.5 rounded-lg md:rounded-xl mt-6 md:mt-10"
      >
        Back
      </button>
    </div>
  );
};

export default Activity;
