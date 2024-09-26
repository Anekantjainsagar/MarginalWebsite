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

const OurClassroom = () => {
  return (
    <div className="pb-[10vw] text-white px-[5vw]">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Our <span className="text-[#ACE2E2]">Classroom</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
        <div className="md:pr-20">
          <p className="md:text-lg mb-1 md:mb-3">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas tempor
            ipsum nisl et mattis montes suscipit elementum leo malesuada netus
            elit platea magna urna aenean ad tellus mattis non blandit integer
            nibh tellus fusce dis vivamus felis quam nec ante tortor fames
            inceptos egestas platea mi litora ipsum ad tristique mattis
            facilisis non feugiat viverra condimentum nunc luctus augue nibh
            eget himenaeos nibh dis phasellus feugiat penatibus neque class
            cubilia class venenatis varius nec mauris a finibus risus pulvinar
            per felis felis nam molestie eleifend pulvinar quam est sociosqu
            elementum magnis platea in potenti convallis vestibulum dignissim
            placerat.
          </p>
          <h6 className="text-newLightGreen text-xl md:text-2xl cursor-pointer">
            Know more About Us
          </h6>
        </div>
        <div className="md:mt-0 mt-4">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom-class",
              nextEl: ".swiper-button-next-custom-class",
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
                  className={`mx-auto md:w-9/12 mb-10 h-[250px] md:h-[300px] rounded-lg bg-gray-300 cursor-pointer`}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClassroom;
