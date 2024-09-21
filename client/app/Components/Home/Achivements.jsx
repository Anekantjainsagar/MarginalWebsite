"use client";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";

const Achievements = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textContainerRef = useRef(null);

  const texts = [
    {
      title: "Name of School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure, nisl eget fringilla pretium, massa sem consequat sapien, sit amet bibendum ante nunc ac nulla. Sed eget ultricies magna.",
    },
    {
      title: "Name of University",
      description:
        "Donec interdum, ligula ut hendrerit interdum, sapien justo porttitor libero, et auctor velit sapien at nibh. In vitae quam ac est feugiat tincidunt in non risus.",
    },
    {
      title: "Name of Award",
      description:
        "Mauris ultricies sapien libero, vel gravida felis blandit vel. Nulla facilisi. Suspendisse sit amet tincidunt velit. Proin scelerisque libero vel velit elementum, vitae facilisis arcu consequat.",
    },
  ];

  useEffect(() => {
    const rotateAnimation = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    rotateAnimation
      .to(".ellipse-container", {
        rotation: 60,
        duration: 1,
        ease: "linear",
        onComplete: () => {
          gsap.to(textContainerRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setCurrentTextIndex(
                (prevIndex) => (prevIndex + 1) % texts.length
              );
              gsap.fromTo(
                textContainerRef.current,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.5,
                }
              );
            },
          });
        },
      })
      .to({}, { duration: 3 }); // Add a 3-second pause after each full rotation
  }, [texts.length]);

  return (
    <div className="text-white px-[5vw]">
      <h2 className="text-3xl font-semibold text-center">Achievements</h2>
      <p className="text-lg text-center mt-1.5">
        Ranked As No. 1 CA Coaching Institute in Bhopal
      </p>
      <div className="flex justify-center items-center mt-10">
        <div className="w-4/12 pr-20" ref={textContainerRef}>
          <h4 className="text-3xl font-semibold text-end">
            {texts[currentTextIndex].title}
          </h4>
          <p className="text-lg font-light text-end mt-2">
            {texts[currentTextIndex].description}
          </p>
        </div>
        <div className="w-[3px] bg-gray-400 h-[400px] mr-24"></div>
        <div className="ellipse-container relative w-[500px] h-[500px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`circle absolute w-32 h-32 border-2 border-gray-400 rounded-full`}
              style={{
                top: `${50 + 40 * Math.sin((index * Math.PI) / 3)}%`,
                left: `${50 + 40 * Math.cos((index * Math.PI) / 3)}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
