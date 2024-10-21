import React from "react";
import Block from "../../Components/Activities/Block";

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black pt-[18vw] md:pt-[8vw] pb-10 px-[3vw]">
      <h4 className="text-xl md:text-3xl font-semibold text-center mb-3 md:mb-5 text-white">
        Activities Conducted At <span className="text-textGreen">MAC</span>
      </h4>
      <div className="grid md:grid-cols-3 gap-4 md:gap-12 px-[3vw] md:px-[4vw]">
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
