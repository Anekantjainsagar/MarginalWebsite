"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Lottie from "react-lottie-player";

const UserLogin = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const history = useRouter();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setIsClient(true);

    fetch(
      "https://lottie.host/3755c644-e5b7-4cda-9fe5-3e68f00731fc/XBjPsNOTo3.json"
    )
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="h-[85vh] overflow-hidden bg-gradient-to-tr from-gray-800 via-newDarkGreen to-gray-800 px-[6vw] flex md:justify-between justify-center items-center">
      <div className="w-6/12 md:block hidden">
        {/* {isClient && animationData && (
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: "auto", height: "auto" }}
          />
        )} */}
      </div>
      <div className="w-[95%] md:w-[40%] bg-footerGreen text-white rounded-xl flex flex-col items-center justify-center py-8">
        <Image
          src={"/logo.png"}
          width={1000}
          height={1000}
          alt="Logo"
          className="w-[25vw] md:w-[10vw] cursor-pointer"
        />
        <h4 className="text-2xl font-medium mt-2 md:mt-3">
          Login Your Acccount
        </h4>
        <div className="w-10/12 md:w-9/12 my-8 md:my-10">
          <div className="w-full">
            <label
              htmlFor="Username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username *
            </label>
            <input
              id="Username"
              type="Username"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter your Username"
            />
          </div>{" "}
          <div className="w-full mt-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={isVisible ? "text" : "password"}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 dark:text-gray-400"
                onClick={toggleVisibility}
              >
                {isVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <p className="text-gray-400 mt-2 cursor-pointer md:text-base text-sm">
            Forgot your password?
          </p>
        </div>
        <button
          onClick={() => {
            history.push("/user/dashboard");
          }}
          className="px-12 rounded-xl py-2 md:py-3 text-lg md:text-xl bg-white text-footerGreen font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
