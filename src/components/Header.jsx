import React from "react";
import bgCircles from "../images/pattern-circles.svg";

export const Header = () => {
  const bgCirclesPattern = {
    backgroundImage: `url(${bgCircles})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };

  return (
    <header
      className="flex flex-col items-center justify-center text-center w-full h-[150px]"
      style={bgCirclesPattern}
    >
      <h1 className="text-[20px] font-bold mb-2">Simple, traffic-based pricing</h1>
      <p className=" w-[60%] text-[13.5px] mb-1 text-grayishBlue">
        Sign-up for our 30-day trial.
        No credit card required.</p>
    </header>
  );
};
