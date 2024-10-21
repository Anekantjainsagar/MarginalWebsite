import React from "react";
import HeroCourse from "../../Components/Courses/Hero";
import Image from "next/image";
import CourseDetails from "../../Components/Courses/CourseDetails";
import Faculties from "../../Components/Courses/Faculties";
import Faq from "../../Components/Courses/Faq";

const CaFoundation = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black">
      <HeroCourse />
      <div className="pt-[2vw] md:px-0 px-[2vw] pb-[8vw]">
        <h4 className="text-xl md:text-3xl font-semibold text-center mb-3 md:mb-5 text-white">
          CA Foundation
        </h4>
        <div className="px-[4vw] flex md:flex-row flex-col items-start justify-between text-white">
          <Image
            src="/course/students.png"
            width={1000}
            height={1000}
            alt="Activity"
            className="md:w-[47%] h-[30vh] md:h-[45vh] object-cover rounded-2xl"
          />
          <div className="md:w-6/12 md:mt-0 mt-2 text-sm md:text-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              poseure, nisl eget fringilla pretium, massa sem consequat sapien,
              sit amet bibendum ante nunc ac nulla. Sed eget ultricies magna.
              Phasellus sapien felis, commodo vitae suscipit molestie, molestie
              in purus.
            </p>
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              poseure, nisl eget fringilla pretium, massa sem consequat sapien,
              sit amet bibendum ante nunc ac nulla.
            </p>
            <p>
              Don’t waste your time. Join our CA Foundation coaching now, and
              give a head start to your Chartered Accountancy career!
            </p>
          </div>
        </div>
        <div className="mt-10 px-[5vw] md:px-[4vw] text-white">
          <h6 className="text-lg md:text-2xl font-medium mb-2">
            MAC Attributes for CA Foundation Classes
          </h6>
          {[
            "Timely completion of the course.",
            "Exam-oriented classes.",
            "Experienced teachers.",
            "Mock Test Papers, specifically designed as per the exam.",
            "Personalized guidance to each student.",
            "Frequent doubt-clearing sessions.",
            "Healthy study environment.",
            "Provision of Live, Recorded and Offline classes.",
          ].map((e, i) => {
            return (
              <li key={i} className="text-sm md:text-xl mb-0.5">
                {e}
              </li>
            );
          })}
        </div>
      </div>
      <CourseDetails />
      <Faculties />
      <Faq />
    </div>
  );
};

export default CaFoundation;
