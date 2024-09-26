"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";

const B2BState = (props) => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    console.log("Resizing, width: ", window.innerWidth);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Context.Provider value={{ width }}>{props.children}</Context.Provider>
  );
};

export default B2BState;
