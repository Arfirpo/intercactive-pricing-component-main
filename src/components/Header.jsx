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
      className="flex flex-col items-center justify-center text-center w-full  h-[162px] md:h-[285px] bg-50% md:bg-contain"
      style={bgCirclesPattern}
    >
      <h1 className="text-[1.4rem] md:text-[2.6rem] font-bold mb-2">Simple, traffic-based pricing</h1>
      <p className="w-[60%] md:w-[50%] text-[.9rem] md:text-[1.6rem] mb-1 text-grayishBlue">
        Sign-up for our 30-day trial.
        No credit card required.</p>
    </header>
  );
};
