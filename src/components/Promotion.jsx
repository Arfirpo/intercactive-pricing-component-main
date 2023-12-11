import React from "react";
import { Benefits } from "./Benefits";
import { StartTrialButton } from "./StartTrialButton";

export const Promotion = () => {
  return (
    <section className="w-full h-[40%] flex flex-col items-center justify-evenly pt-5">
      <Benefits />
      <StartTrialButton />
    </section>
  );
};
