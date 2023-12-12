import React from "react";
import { Benefits } from "./Benefits";
import { StartTrialButton } from "./StartTrialButton";

export const Promotion = () => {
  return (
    <section className="w-full h-[40%] flex flex-col xl:flex-row items-center justify-evenly border-gray-300 border-t">
      <Benefits />
      <StartTrialButton />
    </section>
  );
};
