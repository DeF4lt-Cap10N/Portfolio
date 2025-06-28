import React from "react";
import { useState, useEffect } from "react";

const Scroller = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const getScrollValue = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    let howMuchScrolled = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let totalValue = (howMuchScrolled / height) * 100;
    setScrollPercentage(totalValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollValue);
    window.removeEventListener("scroll", () => {});
  });

  return (
    <>
      <div
        className="border-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full fixed top-0 left-0 right-0 backdrop-blur-md h-1 rounded-l-none z-50"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </>
  );
};

export default Scroller;
