import React from "react";
import { RangeBar } from "./RangeBar";

export const Fee = () => {
  return (
    <section className="flex flex-col justify-between items-center w-full h-[60%] border-gray-300 border-b px-[18px] pb-9">
      <div className="flex flex-col justify-between h-[75%] w-full text-center text-l ">
        <h1>100K PAGEVIEWS</h1>
        <RangeBar />
        <p>
          <span>$16.00</span> / month
        </p>
      </div>
      <div className="text-xs flex items-center justify-between border-2 border-red-500 w-full h-[15%]">
        <p>Monthly Billing</p>
        <input type="checkbox" name="" id="" />
        <p>Year Billing</p>
        <div className="border-none text-lightRed bg-lightGrayishRed px-2 py-1 rounded-full">
          <p>-25%</p>
        </div>
      </div>
    </section>
  );
};
