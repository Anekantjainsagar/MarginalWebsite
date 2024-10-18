import Image from "next/image";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="flex items-center justify-between px-[8vw]">
      <div className="w-7/12 pr-[5vw]">
        <h4 className="text-3xl font-semibold mb-5 text-white text-center">
          Frequently Asked Questions
        </h4>
        {[1, 2, 3, 4, 5, 435, 23, 45].map((e, i) => {
          return (
            <div
              key={i}
              className={`mx-auto w-11/12 p-[2px] bg-gradient-to-b to-[#F8FFA7] from-[#6BBAFF] rounded-xl text-xl mb-4 cursor-pointer`}
            >
              <div className="rounded-xl bg-newDarkGreen w-full h-full flex items-center justify-between text-white px-4">
                <p className="text-xl py-2">
                   What is <span className="text-newLightGreen">MAC</span>?
                </p>
                <FaCaretDown />
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={"/course/faq.png"}
        alt="Faq"
        width={1000}
        height={1000}
        className="w-5/12"
      />
    </div>
  );
};

export default Faq;
