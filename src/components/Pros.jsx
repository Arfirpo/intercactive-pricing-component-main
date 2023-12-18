import React from "react";


export const Pros = ({image, text}) => {
  return (
    <div className="flex items-center gap-4 md:gap-6 justify-center">
      <img src={image} alt="Check" className="mbl:w-3 xl:w-3"/>
      <li className=" font-bold text-[.7rem] mbl:text-[.8rem] md:text-sm">{text}</li>
    </div>
  );
};
