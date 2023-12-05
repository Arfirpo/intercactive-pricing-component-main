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
      className="flex flex-col align-center justify-center text-center w-full h-[150px] font-Manrope mb-6"
      style={bgCirclesPattern}
    >
      <h1 className="text-[20px] font-bold mb-2">Simple, traffic-based pricing</h1>
      <p className="text-[13.5px] mb-1 text-grayishBlue">
        Sign-up for our 30-day trial.
      </p>
      <p className="text-[13.5px] text-grayishBlue">No credit card required.</p>
    </header>
  );
};
