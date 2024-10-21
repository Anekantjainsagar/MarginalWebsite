import React from "react";
import Hero from "../../Components/About/Hero";
import VisionMission from "../../Components/About/Vision&Mission";
import CourseOffered from "../../Components/About/CourseOffered";
import DynamicTeam from "../../Components/About/DynamicTeam";
import Achievements from "../../Components/About/Achievements";

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-black via-newDarkGreen to-black">
      <Hero />
      <VisionMission />
      <DynamicTeam />
      <CourseOffered />
      <Achievements />
    </div>
  );
};

export default About;
