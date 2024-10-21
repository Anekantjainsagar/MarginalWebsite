import React from "react";
import Block from "../../Components/Gallery/Block";

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black pt-[18vw] md:pt-[8vw] pb-10 px-[3vw]">
      <h4 className="text-xl md:text-3xl font-semibold text-center text-white">
        Gallery
      </h4>
      <p className="text-sm md:text-lg text-center text-gray-300">
        Glimpses of events held at MAC
      </p>
      <div className="grid md:grid-cols-3 gap-4 md:gap-12 md:mt-5 mt-3 px-[3vw] md:px-[4vw]">
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
