"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Aluminies = () => {
  return (
    <div className="mx-[3vw] p-[4vw] md:p-[3vw] mb-[10vw] bg-[#F3F3F3] flex md:flex-row flex-col justify-between items-center rounded-lg">
      <div className="md:w-4/12">
        <h2 className="text-3xl md:text-4xl md:w-8/12 font-semibold">
          Straight from the{" "}
          <span className="text-newDarkGreen">Alumni Diaries</span>
        </h2>
        <p className="text-lg md:text-xl mt-1 md:mt-2 md:w-10/12 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          cupiditate quia distinctio beatae dicta tenetur accusantium pariatur
          quos, voluptates nam totam sed assumenda ex.
        </p>
      </div>
      <div className="w-full md:w-6/12 relative md:mt-0 mt-4">
        <div
          className="swiper-button-prev-custom-alumini text-[30px] md:text-[50px] absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full cursor-pointer"
          role="button"
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          className="swiper-button-next-custom-alumini text-[30px] md:text-[50px] absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full cursor-pointer"
          role="button"
        >
          <MdKeyboardArrowRight />
        </div>
        <div className="md:px-10">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom-alumini",
              nextEl: ".swiper-button-next-custom-alumini",
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span className="${className} bg-blue-500 opacity-100 hover:bg-blue-700"></span>`,
            }}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`mx-auto p-5 w-11/12 md:w-10/12 bg-white cursor-pointer rounded-xl flex`}
                >
                  <div className="md:h-[200px] mr-5 border-2 border-black rounded-xl w-6/12"></div>
                  <div className="w-6/12">
                    <h5 className="text-xl md:text-2xl font-semibold">Name</h5>
                    <p className="md:text-lg font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras poseure, nisl eget fringilla pretium, massa sem
                      consequat sapien, sit amet bibendum ante nunc ac nulla.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Aluminies;
