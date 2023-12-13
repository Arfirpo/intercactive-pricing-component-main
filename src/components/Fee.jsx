import React from "react";
import { RangeBar } from "./RangeBar";
import { ToggleSlider } from "./ToogleSlider";

export const Fee = () => {
  return (
    <section className="flex flex-col justify-evenly items-center w-[84%] h-[70%] lg:gap-6 pb-9 lg:pb-4">
      <div className="flex flex-col justify-evenly h-[75%] w-full text-center  xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:place-items-center">
        <h1 className="text-sm md:text-[1.5rem] xl:text-sm font-bold justify-self-start">
          <span>100K</span> PAGEVIEWS
        </h1>
        <RangeBar />
        <p className="flex items-center justify-center gap-2 text-xs md:text-2xl xl:text-sm xl:justify-self-end">
          <span className="text-darkDesaturatedBlue font-bold  text-4xl md:text-3xl">$</span>
          <span className="text-darkDesaturatedBlue font-bold  text-4xl md:text-4xl ">16.00</span> / month
        </p>
      </div>
      <div className=" text-[.7rem] mbl:text-xs md:text-sm flex items-center justify-evenly xl:justify-end xl:gap-8 w-full h-[15%]">
        <p>Monthly Billing</p>
        <ToggleSlider />
        <p>Year Billing</p>
        <div className="border-none text-lightRed bg-lightGrayishRed px-2 py-1 rounded-full">
          <p>-25%</p>
        </div>
      </div>
    </section>
  );
};
