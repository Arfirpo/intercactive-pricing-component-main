import React from "react";


export const Pros = ({image, text}) => {
  return (
    <div className="flex items-center gap-6 justify-center">
      <img src={image} alt="Check" className="w-6"/>
      <li className="text-2xl">{text}</li>
    </div>
  );
};
