import React from "react";

const VisionMission = () => {
  return (
    <div className="bg-white flex md:flex-row flex-col items-center justify-between p-[5vw] md:p-[3vw] my-[5vw]">
      <div className="md:w-5/12">
        <h4 className="text-newDarkGreen text-xl md:text-3xl font-semibold">
          Our Vision
        </h4>
        <p className="text-sm md:text-lg mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
          nisl eget fringilla pretium, massa sem consequat sapien, sit amet
          bibendum ante nunc ac nulla. Sed eget ultricies magna. Phasellus
          sapien felis, commodo vitae suscipit molestie, molestie in purus.
        </p>
      </div>
      <div className="bg-newDarkGreen text-white py-2 px-4 md:px-5 md:py-5 rounded-xl md:mt-0 mt-4 md:w-5/12">
        <h4 className=" text-xl md:text-3xl font-semibold">Our Mission</h4>
        <p className="text-sm md:text-lg mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
          nisl eget fringilla pretium, massa sem consequat sapien, sit amet
          bibendum ante nunc ac nulla. Sed eget ultricies magna. Phasellus
          sapien felis, commodo vitae suscipit molestie, molestie in purus.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
