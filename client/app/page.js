import React from "react";
import Hero from "./Components/Home/Hero";
import CourseOffered from "./Components/Home/CourseOffered";
import WhyUs from "./Components/Home/WhyUs";
import YtChannels from "./Components/Home/YtChannels";
import OurClassroom from "./Components/Home/OurClassroom";
import Aluminies from "./Components/Home/Aluminies";
import Achivements from "./Components/Home/Achivements";
import AcademicHeads from "./Components/Home/AcademicHeads";

const Home = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black">
      <Hero />
      <Achivements />
      <CourseOffered />
      <WhyUs />
      <AcademicHeads />
      <OurClassroom />
      <Aluminies />
      <YtChannels />
    </div>
  );
};

export default Home;
