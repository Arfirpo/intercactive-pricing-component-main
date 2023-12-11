import React from "react";
import { RangeBar } from "./RangeBar";
import { ToggleSlider } from "./ToogleSlider";

export const Fee = () => {
  return (
    <section className="flex flex-col justify-evenly items-center w-full h-[60%] border-gray-300 border-b px-[18px] pb-9">
      <div className="flex flex-col justify-evenly h-[75%] w-full text-center text-l ">
        <h1 className="text-lg md:text-[1.875rem] font-bold">
          <span>100K</span> PAGEVIEWS
        </h1>
        <RangeBar />
        <p className="flex items-center justify-center gap-2 text-xs md:text-2xl">
          <span className="text-darkDesaturatedBlue font-bold  text-4xl md:text-6xl">$</span>
          <span className="text-darkDesaturatedBlue font-bold  text-4xl md:text-6xl">16.00</span> / month
        </p>
      </div>
      <div className="text-xs md:text-2xl flex items-center justify-around w-full h-[15%]">
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
