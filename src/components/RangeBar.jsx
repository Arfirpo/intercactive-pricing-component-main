import React, { useState } from "react";
import bgnSlider from "../images/icon-slider.svg";

export const RangeBar = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  // Función para calcular la posición relativa del pulgar en el rango [0, 1]
  const calculateThumbPosition = () => {
    return rangeValue / 100;
  };

  return (
    <>
      <div className="w-full h-[75px] flex items-center justify-center">
        <input
          type="range"
          step={4}
          min={0}
          max={100}
          className="w-full appearance-none h-3 rounded-full cursor-pointer"
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
            width: 5rem;
            height: 5rem;
            background-color: hsl(174, 86%, 45%);
            background-image: url(${bgnSlider});
            background-repeat: no-repeat;
            background-size: 50%;
            background-position: center;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            margin-top: -32px;
            -webkit-appearance: none;
            box-shadow: 0 20px 25px 8px #a5f3eb;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            background-color: hsl(174, 77%, 80%);
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 20px;
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

