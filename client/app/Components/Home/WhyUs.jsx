import React from "react";

const WhyUs = () => {
  return (
    <div className="pb-[10vw] text-white">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        Why Choose Us
      </h2>
      <p className="py-1 md:py-2 text-sm md:text-lg text-center w-11/12 md:w-8/12 mx-auto text-[#F8F8F8]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
        nisl eget fringilla pretium, massa sem consequat sapien, sit amet
        bibendum ante nunc ac nulla. Sed eget ultricies magna. Phasellus sapien
        felis, commodo vitae suscipit molestie, molestie in purus.
      </p>{" "}
      <div className="grid md:grid-cols-3 px-4 md:px-20 md:mt-8">
        {[
          {
            name: "Qualified Teachers",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure, nisl eget fringilla pretium, massa sem.",
          },
          {
            name: "Better Learning",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure, nisl eget fringilla pretium, massa sem.",
          },
          {
            name: "Improved Results",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure, nisl eget fringilla pretium, massa sem.",
          },
        ].map((e, i, arr) => {
          return (
            <div
              className={`px-[2vw] py-2 md:py-4 ${
                arr.length - 1 != i && "md:border-r"
              } border-r-[#F1F1F1] flex flex-col items-start md:items-center justify-center`}
              key={i}
            >
              <h4 className="text-lg md:text-2xl text-left md:text-center font-semibold">
                {e?.name}
              </h4>
              <p className="md:mt-2 text-left md:text-center text-sm md:text-base text-[#F1F1F1]">
                {e?.about}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
