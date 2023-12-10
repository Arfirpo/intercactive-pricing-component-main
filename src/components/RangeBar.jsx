import React, { useState } from "react";
<<<<<<< HEAD
import bgnSlider from "../images/icon-slider.svg";

export const RangeBar = () => {
  const [rangeValue, setRangeValue] = useState(50);
=======

export const RangeBar = () => {
  const [rangeValue, setRangeValue] = useState(0);
>>>>>>> dbb6f965d9d619798f50ef19d67e334c07459674

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  // Función para calcular la posición relativa del pulgar en el rango [0, 1]
  const calculateThumbPosition = () => {
    return rangeValue / 100;
  };

  return (
    <>
      <div className="w-full h-[30px] flex items-center justify-center">
        <input
          type="range"
          step={4}
          min={0}
          max={100}
          className="w-full appearance-none h-3 rounded-full cursor-pointer"
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            width: 40px;
            height: 40px;
            background-color: hsl(174, 86%, 45%);
            background-image: url(${bgnSlider});
            background-repeat: no-repeat;
            background-position: center;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            margin-top: -17px;
            -webkit-appearance: none;
            box-shadow: 0 10px 18px 4px #a5f3eb;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            background-color: hsl(174, 77%, 80%);
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 8px;
            border-radius: 50px;
            background: linear-gradient(
              to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${calculateThumbPosition() * 100}%,
              hsl(224, 65%, 95%) ${calculateThumbPosition() * 100}%,
              hsl(224, 65%, 95%) 100%
            );
          }
        `}
      </style>
    </>
  );
};

