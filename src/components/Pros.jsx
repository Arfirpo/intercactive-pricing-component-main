import React from "react";


export const Pros = ({image, text}) => {
  return (
    <div className="flex items-center gap-4 md:gap-6 justify-center">
      <img src={image} alt="Check" className="w-4 md:w-6"/>
      <li className=" text-[.8rem] md:text-2xl">{text}</li>
    </div>
  );
};
