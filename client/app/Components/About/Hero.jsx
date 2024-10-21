import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center pt-[18vw] md:pt-[8vw] pb-2 md:pb-10 px-[5vw] md:px-[3vw]">
      <Image
        src={"/about/hero.png"}
        width={1000}
        height={1000}
        alt="Hero image of about section"
        className="md:w-5/12"
      />
      <div className="md:ml-[2vw] md:mt-0 mt-2 text-white">
        <h4 className="text-xl md:text-3xl font-semibold">About MAC</h4>
        <p className="md:text-lg text-sm md:mt-1">
          Marginal Classes were found in 2017, under the leadership of Gautam
          Jain, Ajay Gupta, Swapnil Williams, Shreya Agrawal and Aasim Ali.
          <br /> It had a humble beginning, but was aided by strong urge,
          unwavering toil, unmatched teaching and consistent results. Today, it
          has blossomed into a synonym of success in classes 11th and 12th. And,
          we’re now ready to enter phase two of our journey with higher levels
          of success benchmarks.
        </p>
      </div>
    </div>
  );
};

export default Hero;
