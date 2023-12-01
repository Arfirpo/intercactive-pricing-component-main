import React from "react";
import backgroundImage from "../images/pattern-circles.svg";

export const Header = () => {
  return (
    <header
      className="bg-center bg-no-repeat text-center w-full h-[17.75%] pt-20 px-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-xl font-bold">Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial.</p>
      <p>No credit card required.</p>
    </header>
  );
};
