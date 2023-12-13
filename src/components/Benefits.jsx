import React from "react";
import { Pros } from "./Pros";
import checkIcon from "../images/icon-check.svg";

export const Benefits = () => {
  return (
    <ul className="mbl:w-[50%] h-[50%] text-center flex flex-col justify-evenly xl:items-start gap-2">
      <Pros image={checkIcon} text={"Unlimited websites"} />
      <Pros image={checkIcon} text={"100% data ownership"} />
      <Pros image={checkIcon} text={"Email reports"} />
    </ul>
  );
};

