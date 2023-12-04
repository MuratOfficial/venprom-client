"use client";
import React, { useEffect, useState } from "react";

function PhotoCollage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (count >= 0 && count < 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 3000);
    return () => clearInterval(myInterval);
  }, [count]);

  const heroImgList = ["/heroImg/1.jpg", "/heroImg/2.jpg", "/heroImg/4.jpg"];
  return (
    <div
      className="-z-10 top-16 absolute w-full h-[500px] transition-all duration-500 delay-150 ease-in-out bg-cover"
      style={{ backgroundImage: `url(${heroImgList[count]})` }}
    ></div>
  );
}

export default PhotoCollage;
