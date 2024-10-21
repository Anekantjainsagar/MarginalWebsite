import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white pt-[15vw] md:pt-[5vw] px-8 md:px-[5vw] text-footerGreen">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full md:gap-y-0 gap-y-6">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt="Main logo"
            width={1000}
            height={1000}
            className="w-6/12 md:w-5/12"
          />
          <p className="mt-2 text-center text-sm md:text-base md:text-start w-11/12 md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            poseure, nisl eget fringilla pretium, massa sem consequat sapien,
            sit amet bibendum ante nunc ac nulla. Sed eget ultricies magna.
            Phasellus sapien felis, commodo.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold md:text-start text-center">
            Services
          </h3>
          {[
            { name: "About Us" },
            { name: "Activities" },
            { name: "Class 11th" },
            { name: "Class 12th" },
            { name: "CUET" },
            { name: "CA Foundation" },
            { name: "IMPAT" },
            { name: "Graduation Programs" },
          ].map((e, i) => {
            return (
              <p
                className="my-0.5 md:text-start text-sm md:text-base text-center"
                key={i}
              >
                {e?.name}
              </p>
            );
          })}
        </div>
        <div className="w-11/12 mx-auto md:w-9/12">
          <h3 className="text-xl md:text-2xl font-semibold md:text-start text-center">
            Contact Us
          </h3>
          <div className="my-2.5 gap-x-4 flex md:flex-row md:gap-y-0 gap-y-1.5 flex-col items-center md:justify-start justify-center">
            <svg
              className="w-4 md:w-5 aspect-square"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7263 9.87353L9.88811 9.63979C9.67198 9.61152 9.4529 9.63817 9.24734 9.71774C9.04178 9.79731 8.85508 9.92774 8.70128 10.0992L7.36971 11.5823C5.31547 10.4183 3.6457 8.55862 2.60067 6.2707L3.93947 4.7796C4.25065 4.43301 4.40263 3.94941 4.35197 3.45775L4.1421 1.42663C4.10123 1.03337 3.93185 0.670615 3.66626 0.407511C3.40066 0.144408 3.05743 -0.000644859 2.70198 2.15521e-06H1.45002C0.632259 2.15521e-06 -0.0479991 0.757644 0.00265842 1.66843C0.386208 8.55169 5.32893 14.0486 11.5019 14.4758C12.3197 14.5322 12.9999 13.7746 12.9999 12.8638V11.4694C13.0072 10.6554 12.4572 9.97025 11.7263 9.87353Z"
                fill="#003B4D"
              />
            </svg>
            <p className="-mt-1 text-sm md:text-base">+91 9993888160</p>
          </div>
          <div className="my-2.5 gap-x-4 flex md:flex-row md:gap-y-0 gap-y-1.5 flex-col items-center md:justify-start justify-center">
            <svg
              className="w-6 aspect-square"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.875 4.09204C15.1109 3.32046 14.2009 2.70868 13.1979 2.29234C12.195 1.876 11.1192 1.66344 10.0333 1.66704C5.48333 1.66704 1.775 5.37537 1.775 9.92537C1.775 11.3837 2.15833 12.8004 2.875 14.0504L1.70833 18.3337L6.08333 17.1837C7.29167 17.842 8.65 18.192 10.0333 18.192C14.5833 18.192 18.2917 14.4837 18.2917 9.9337C18.2917 7.72537 17.4333 5.65037 15.875 4.09204ZM10.0333 16.792C8.8 16.792 7.59167 16.4587 6.53333 15.8337L6.28333 15.6837L3.68333 16.367L4.375 13.8337L4.20833 13.5754C3.52296 12.4813 3.1591 11.2164 3.15833 9.92537C3.15833 6.14204 6.24167 3.0587 10.025 3.0587C11.8583 3.0587 13.5833 3.77537 14.875 5.07537C15.5147 5.71192 16.0216 6.46916 16.3664 7.30314C16.7111 8.13713 16.8868 9.03128 16.8833 9.9337C16.9 13.717 13.8167 16.792 10.0333 16.792ZM13.8 11.6587C13.5917 11.5587 12.575 11.0587 12.3917 10.9837C12.2 10.917 12.0667 10.8837 11.925 11.0837C11.7833 11.292 11.3917 11.7587 11.275 11.892C11.1583 12.0337 11.0333 12.0504 10.825 11.942C10.6167 11.842 9.95 11.617 9.16667 10.917C8.55 10.367 8.14167 9.69204 8.01667 9.4837C7.9 9.27537 8 9.16704 8.10833 9.0587C8.2 8.96704 8.31667 8.81704 8.41667 8.70037C8.51667 8.5837 8.55833 8.49204 8.625 8.3587C8.69167 8.21704 8.65833 8.10037 8.60833 8.00037C8.55833 7.90037 8.14167 6.8837 7.975 6.46704C7.80833 6.06704 7.63333 6.11704 7.50833 6.1087H7.10833C6.96667 6.1087 6.75 6.1587 6.55833 6.36704C6.375 6.57537 5.84167 7.07537 5.84167 8.09204C5.84167 9.1087 6.58333 10.092 6.68333 10.2254C6.78333 10.367 8.14167 12.4504 10.2083 13.342C10.7 13.5587 11.0833 13.6837 11.3833 13.7754C11.875 13.9337 12.325 13.9087 12.6833 13.8587C13.0833 13.8004 13.9083 13.3587 14.075 12.8754C14.25 12.392 14.25 11.9837 14.1917 11.892C14.1333 11.8004 14.0083 11.7587 13.8 11.6587Z"
                fill="#003B4D"
              />
            </svg>
            <p className="-mt-1 text-sm md:text-base">+91 6262888170</p>
          </div>
          <div className="my-3 gap-x-4 flex md:flex-row md:gap-y-0 gap-y-1.5 flex-col items-center md:items-start md:justify-start justify-end w-full">
            <svg
              className="w-6 md:w-9 aspect-square"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.44801 15.3345C7.31726 15.4283 7.16064 15.4788 7 15.4788C6.83936 15.4788 6.68274 15.4283 6.55199 15.3345C2.68867 12.5657 -1.41145 6.87055 2.73348 2.75521C3.871 1.62914 5.40369 0.998604 7 1C8.60005 1 10.1353 1.63146 11.2665 2.75441C15.4114 6.86975 11.3113 12.5641 7.44801 15.3345Z"
                stroke="#003B4D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7.00001 8.24008C7.42437 8.24008 7.83135 8.07058 8.13141 7.76887C8.43148 7.46716 8.60006 7.05795 8.60006 6.63127C8.60006 6.20459 8.43148 5.79538 8.13141 5.49367C7.83135 5.19196 7.42437 5.02246 7.00001 5.02246C6.57565 5.02246 6.16867 5.19196 5.86861 5.49367C5.56854 5.79538 5.39996 6.20459 5.39996 6.63127C5.39996 7.05795 5.56854 7.46716 5.86861 7.76887C6.16867 8.07058 6.57565 8.24008 7.00001 8.24008Z"
                stroke="#003B4D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <p className="-mt-1 text-center md:text-left text-sm md:text-base">
              219, 3rd floor, near Gaurav Dairy, Indrapuri C-Sector, Bhopal
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold md:text-start text-center">
            Links
          </h3>
          {[
            { name: "About Us" },
            { name: "Privacy Policy" },
            { name: "Terms & Conditions" },
          ].map((e, i) => {
            return (
              <p
                className="my-0.5 md:text-start text-sm md:text-base text-center"
                key={i}
              >
                {e?.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="h-[1px] bg-gray-500 md:bg-black mx-auto w-11/12 md:w-full my-4 md:my-10"></div>
      <div className="pb-10 flex items-center gap-x-4 md:gap-x-6 justify-center">
        {[
          "/icons/whatsapp.png",
          "/icons/instagram.png",
          "/icons/facebook.png",
          "/icons/youtube.png",
          "/icons/telegram.png",
        ].map((e, i) => {
          return (
            <Image
              key={i}
              alt={e?.src}
              className="p-2 md:p-1.5 w-10 md:w-12 object-contain aspect-square bg-[#D9D9D9] shadow-lg shadow-gray-300 rounded-full"
              src={e}
              width={1000}
              height={1000}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
