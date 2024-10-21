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
import Image from "next/image";

const Faculties = () => {
  return (
    <div className="py-[8vw] text-white px-[5vw] md:px-[6vw]">
      <h4 className="text-xl md:text-3xl font-semibold mb-3 md:mb-5 text-white text-center">
        Respective{" "}
        <span className="text-newLightGreen text-center">Faculties</span>
      </h4>
      <Swiper
        slidesPerView={
          typeof window != "undefined" && window.innerWidth < 600 ? 1 : 3
        }
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
              className={`mx-auto w-11/12 p-[2px] bg-gradient-to-b to-[#F8FFA7] from-[#6BBAFF] rounded-xl text-xl`}
            >
              <div className="rounded-xl relative bg-newDarkGreen w-full h-full flex items-center flex-col justify-center">
                <Image
                  src="/course/faculty.png"
                  alt="Member"
                  width="1000"
                  height="1000"
                  className="w-8/12"
                />
                <div className="absolute bottom-2 left-4">
                  <h6 className="font-semibold text-lg md:text-2xl mt-2">Sarthak Gour</h6>
                  <p className="text-sm md:text-lg md:my-0.5">Title/Designation</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Faculties;
