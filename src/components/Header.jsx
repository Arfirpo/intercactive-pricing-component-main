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
      className=" border-2 border-red-600 flex flex-col items-center justify-center text-center w-[95%] h-[18.25%] md:w-[85%] xl:w-[37.5%] bg-contain"
      style={bgCirclesPattern}
    >
      <h1 className="text-[1.4rem] md:text-[1.6rem] xl:text-[2rem] font-bold mb-2">
        Simple, traffic-based pricing
      </h1>
      <p className="w-[55%] md:w-[40%] text-[.9rem] sm:w-[50%] md:text-[1.2rem] xl:text-sm xl:w-[70%] mb-1 text-grayishBlue">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </header>
  );
};
