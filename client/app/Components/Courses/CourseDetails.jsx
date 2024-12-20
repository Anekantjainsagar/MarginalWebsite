import React from "react";

const CourseDetails = () => {
  return (
    <div className="bg-white py-4 md:py-12 px-[5vw] md:px-[4vw] flex flex-col items-center">
      <h4 className="text-xl md:text-3xl font-semibold mb-1 md:mb-2 text-black text-center">
        Course <span className="text-newDarkGreen text-center">Details</span>
      </h4>
      <div className="border border-black w-full mt-1.5 md:mt-3">
        <p className="text-center border-b border-b-black text-base md:text-lg font-semibold py-1.5 md:py-2.5">
          MAC CA Foundation Classes Details
        </p>
        {[
          { title: "Eligibility", value: "12th Class appeared students." },
          {
            title: "Objective",
            value:
              "To understand the soul of the subject & solve the questions within time by tricks and methods.",
          },
          { title: "Medium", value: "English." },
          { title: "Course Duration", value: "3 months." },
          { title: "Course Fees", value: "40,000/-" },
          {
            title: "Course Material",
            value: "Modules, provided by Institute.",
          },
          { title: "Starting Date", value: "January 2025." },
          { title: "Mode of Classes", value: "Live | Recorded | Offline" },
          {
            title: "Venue of Offline Classes",
            value:
              "219, 3rd floor, near Gaurav Dairy, Indrapuri C-sector, Bhopal",
          },
        ]?.map((e, i, arr) => {
          return (
            <div
              key={i}
              className={`flex items-center ${
                i !== arr.length - 1 && "border-b border-b-black"
              }`}
            >
              <p
                className={`w-5/12 md:w-3/12 text-sm md:text-base py-1.5 md:py-2.5 font-semibold text-center`}
              >
                {e?.title}
              </p>
              <p
                className={`w-7/12 md:w-9/12 py-1.5 md:py-2.5 text-sm md:text-base border-l border-l-black px-3 md:px-4`}
              >
                {e?.value}
              </p>
            </div>
          );
        })}
        <div className={`flex items-center border-t border-t-black`}>
          <p
            className={`w-5/12 md:w-3/12 text-sm md:text-base py-2.5 font-semibold text-center`}
          >
            Mock Test
          </p>
          <div
            className={`w-7/12 md:w-9/12 text-sm md:text-base py-2.5 md:mr-1 px-3 md:px-4 border-l border-l-black`}
          >
            <p className="mb-1">6 mock tests</p>
            <ol type="1">
              {[
                "First 25% course",
                "Next 25% course",
                "Next 25% course",
                "Last 25% course",
                "First 1-50% course",
                "100% complete course",
              ]?.map((e, i) => {
                return (
                  <li key={i}>
                    {i + 1}. {e}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <button className="bg-newDarkGreen text-white px-10 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-lg mt-3 md:mt-5">
        Know More
      </button>
    </div>
  );
};

export default CourseDetails;
