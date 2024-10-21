"use client";
import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (
    isValid,
    value,
    countryData,
    number,
    fullNumber
  ) => {
    setPhoneNumber(value); // Update the state with the phone number
  };

  return (
    <div className="pt-[18vw] md:pt-[12vh] pb-[8vw] md:pb-[6vw] flex items-center justify-center text-white">
      <div className="h-[35vh] md:h-[85vh] px-[3vw] w-full mainBg flex flex-col justify-center">
        <h1 className="text-xl md:text-4xl font-semibold">
          Discover. <span className="text-[#EEFF2E]">Prepare.</span> Succeed.
        </h1>
        <h4 className="text-xs md:text-3xl text-gray-200 md:mt-2">
          Lorem ipsum dolor sit amet, consectetur ?
        </h4>
        <p className="text-xs md:text-2xl font-extralight md:w-7/12 md:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
          nisl eget fringilla pretium, massa sem.
        </p>
        <div className="my-2 md:my-10">
          <div className="flex items-center justify-center mb-2 w-[50vw] md:w-[22vw]">
            <IntlTelInput
              preferredCountries={["in", "us"]} // Custom preferred countries
              inputClassName="w-full outline-none md:text-xl text-sm bg-transparent text-white border-white phone-input" // Add a specific class for phone input
              containerClassName="intl-tel-input w-full border-white" // Custom container classes
              onPhoneNumberChange={handlePhoneChange} // Update state when phone number changes
              fieldName="phone"
            />
          </div>
          <p className="font-light md:text-xl text-xs">
            Login ID and Password would be sent on the above stated no.
          </p>
        </div>
        <button className="w-[40vw] md:w-[22vw] md:mt-4 bg-white text-newDarkGreen py-1 md:py-2.5 rounded-md md:rounded-xl font-medium md:font-bold text-sm md:text-xl">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
