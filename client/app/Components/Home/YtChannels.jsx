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

const YtChannels = () => {
  return (
    <div className="pb-[10vw] px-[5vw] text-white">
      <h2 className="text-3xl font-semibold text-center">
        Our <span className="text-[#ACE2E2]">YouTube Channels</span>
      </h2>
      <div className={`mt-10 relative`}>
        {/* Left Arrow */}
        <div
          className="swiper-button-prev-custom-channels text-[50px] absolute top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full cursor-pointer"
          role="button"
        >
          <MdKeyboardArrowLeft />
        </div>

        {/* Right Arrow */}
        <div
          className="swiper-button-next-custom-channels text-[50px] absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full cursor-pointer"
          role="button"
        >
          <MdKeyboardArrowRight />
        </div>

        <div className="px-10">
          <Swiper
            slidesPerView={3}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom-channels",
              nextEl: ".swiper-button-next-custom-channels",
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
                  className={`mx-auto w-9/12 mb-10 h-[250px] bg-gray-300 cursor-pointer`}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default YtChannels;
