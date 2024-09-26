import React from "react";

const CourseOffered = () => {
  return (
    <div className="bg-white py-8 my-[10vw]">
      <h2 className="text-3xl font-semibold text-center">
        Courses Offered By Us
      </h2>
      <div className="grid grid-cols-4 px-[5vw] mt-6 w-full">
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
              className={`px-[2vw] py-4 ${
                arr.length - 1 != i && "border-r"
              } border-r-[#A5A5A5]`}
              key={i}
            >
              <h4 className="text-2xl font-semibold text-newDarkGreen">
                {e?.name}
              </h4>
              <ul className="list-disc ml-5 mt-2">
                {e?.list?.map((el, i) => {
                  return (
                    <li key={i} className="text-lg">
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
