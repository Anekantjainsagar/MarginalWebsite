import React from "react";

const CourseOffered = () => {
  return (
    <div className="text-white py-8 my-[8vw] md:my-[5vw] md:px-0 px-[5vw]">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        Courses Offered By Us
      </h2>
      <div className="grid md:grid-cols-4 px-[5vw] mt-2 md:mt-6 w-full">
        {[
          {
            name: "Regular Course",
            list: [
              "Cover entire course 3 times before exam.",
              "Regular classes followed by weekly test series.",
              "Comprehensive last time test series to get well prepared.",
            ],
          },
          {
            name: "Crash Course",
            list: [
              "Cover entire course within 60 days.",
              "Comprehensive last time Test Series to get well prepared.",
            ],
          },
          {
            name: "CA Foundation",
            list: [
              "Cover entire course before the exam.",
              "Regular classes by CA/CMA professionals.",
              "Comprehensive Mock Test Series as per ICAI.",
            ],
          },
          {
            name: "CUET",
            list: [
              "Comprehensive last time and weekly test series.",
              "Regular Course and Crash Course.",
              "All subjects for each domain.",
            ],
          },
        ].map((e, i, arr) => {
          return (
            <div
              className={`md:px-[2vw] py-2 md:py-4 ${
                arr.length - 1 != i && "border-r-0 md:border-r"
              } border-r-[#A5A5A5]`}
              key={i}
            >
              <h4 className="text-lg md:text-2xl font-medium text-white">{e?.name}</h4>
              <ul className="list-disc ml-6 md:ml-5 mt-1 md:mt-2">
                {e?.list?.map((el, i) => {
                  return (
                    <li key={i} className="text-sm md:text-lg text-textGreen">
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseOffered;
