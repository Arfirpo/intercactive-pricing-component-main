import React from "react";
import bgCircles from "../images/pattern-circles.svg";

export const Header = () => {
  const bgCirclesPattern = {
    backgroundImage: `url(${bgCircles})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header
      className=" border-2 border-red-600 flex flex-col items-center justify-center text-center w-[90%] h-[18vh] sm:w-[80%] lg:w-[55%] xl:w-[37.5%] bg-contain"
      style={bgCirclesPattern}
    >
      <h1 className=" text-[1.2rem] mbl:text-[1.4rem] md:text-[1.6rem] xl:text-[2rem] font-bold mb-2">
        Simple, traffic-based pricing
      </h1>
      <p className=" w-[60%] mbl:-[55%] md:w-[51%] mbl:text-[.9rem] sm:w-[60%]  text-[.8rem] md:text-[1.2rem] xl:text-sm xl:w-[70%] mb-1 text-grayishBlue">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </header>
  );
};
