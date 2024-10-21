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

const Achievements = () => {
  return (
    <div className="pb-[8vw] md:pb-[5vw] text-white px-[5vw] md:px-[6vw]">
      <h4 className="text-xl md:text-3xl font-semibold text-center mb-3 md:mb-5">
        Our Dynamic Team
      </h4>{" "}
      <Swiper
        slidesPerView={1}
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
            <Image
              src="/about/achieve.png"
              alt="Member"
              width="1000"
              height="1000"
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achievements;
