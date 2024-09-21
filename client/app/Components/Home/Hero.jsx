"use client";
import React, { useState } from "react";

const Hero = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="pt-[12vh] pb-[10vw] flex items-center justify-center text-white">
      <div className="h-[70vh] px-[3vw] w-full mainBg flex flex-col justify-center">
        <h1 className="text-4xl font-semibold">
          Discover. <span className="text-[#EEFF2E]">Prepare.</span> Succeed.
        </h1>
        <h4 className="text-3xl text-gray-200 font-light mt-2">
          Lorem ipsum dolor sit amet, consectetur ?
        </h4>
        <p className="text-2xl font-extralight w-7/12 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
          nisl eget fringilla pretium, massa sem.
        </p>
        <div className="my-8">
          <input
            type="text"
            className="w-[20vw] outline-none py-2 px-4 rounded-lg bg-transparent border mb-2"
            placeholder="Enter Phone Number"
            autoFocus={true}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <p>Login ID and Password would be sent on the above stated no.</p>
        </div>
        <button className="w-[25vw] mt-4 bg-white text-newDarkGreen py-2.5 rounded-xl font-bold text-xl">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
