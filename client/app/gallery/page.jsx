import React from "react";
import Block from "../Components/Gallery/Block";

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black pt-[8vw] pb-10 px-[3vw]">
      <h4 className="text-3xl font-semibold text-center text-white">Gallery</h4>
      <p className="text-lg text-center text-gray-300">
        Glimpses of events held at MAC
      </p>
      <div className="grid grid-cols-3 gap-12 px-[4vw] mt-5">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

export default About;
