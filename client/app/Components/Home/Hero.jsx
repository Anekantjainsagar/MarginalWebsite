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
    <div className="pt-[12vh] pb-[6vw] flex items-center justify-center text-white">
      <div className="h-[85vh] px-[3vw] w-full mainBg flex flex-col justify-center">
        <h1 className="text-4xl font-semibold">
          Discover. <span className="text-[#EEFF2E]">Prepare.</span> Succeed.
        </h1>
        <h4 className="text-3xl text-gray-200 mt-2">
          Lorem ipsum dolor sit amet, consectetur ?
        </h4>
        <p className="text-2xl font-extralight w-7/12 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
          nisl eget fringilla pretium, massa sem.
        </p>
        <div className="my-10">
          <div className="flex items-center justify-center mb-2 w-[22vw]">
            <IntlTelInput
              preferredCountries={["in", "us"]} // Custom preferred countries
              inputClassName="w-full outline-none bg-transparent text-white border-white phone-input" // Add a specific class for phone input
              containerClassName="intl-tel-input w-full border-white" // Custom container classes
              onPhoneNumberChange={handlePhoneChange} // Update state when phone number changes
              fieldName="phone"
            />
          </div>
          <p className="font-light">
            Login ID and Password would be sent on the above stated no.
          </p>
        </div>
        <button className="w-[22vw] mt-4 bg-white text-newDarkGreen py-2.5 rounded-xl font-bold text-xl">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
