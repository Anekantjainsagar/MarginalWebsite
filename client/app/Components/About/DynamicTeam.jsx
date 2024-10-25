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

const DynamicTeam = () => {
  return (
    <div className="my-[8vw] md:my-[5vw] text-white px-[5vw] md:px-[6vw]">
      <h4 className="text-xl md:text-3xl font-semibold text-center mb-3 md:mb-5">
        Our Dynamic Team
      </h4>{" "}
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500} // Adjust this value (in milliseconds) for transition speed
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`mx-auto w-11/12 p-[1px] md:p-[2px] bg-gradient-to-b to-[#F8FFA7] from-[#6BBAFF] rounded-xl text-xl`}
            >
              <div className="rounded-xl bg-newDarkGreen w-full h-full flex items-center flex-col justify-center px-4 md:px-7 py-3 md:py-6">
                <Image
                  src="/about/member.png"
                  alt="Member"
                  width="1000"
                  height="1000"
                  className="w-6/12"
                />
                <h6 className="font-semibold text-lg md:text-2xl mt-2">
                  Sarthak Gour
                </h6>
                <p className="md:text-lg text-base md:my-0.5">
                  Title/Designation
                </p>
                <p className="text-gray-300 text-sm md:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis odit adipisci vitae quo rem harum nobis. Optio,
                  voluptates natus consequatur facilis sapiente nobis similique
                  doloribus sit dolor corrup
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicTeam;
