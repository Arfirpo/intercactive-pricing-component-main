import React, { useState } from "react";
import bgnSlider from "../images/icon-slider.svg";

export const RangeBar = () => {
  const pricingDeets = {
    1: {
      pageviews: "10k",
      montly: 8,
      yearly: 72,
    },
    2: {
      pageviews: "50k",
      montly: 12,
      yearly: 108,
    },
    3: {
      pageviews: "100k",
      montly: 16,
      yearly: 144,
    },
    4: {
      pageviews: "500k",
      montly: 24,
      yearly: 216,
    },
    5: {
      pageviews: "1M",
      montly: 36,
      yearly: 324,
    },
  };

  const [rangeValue, setRangeValue] = useState(3);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  // Función para calcular la posición relativa del pulgar en el rango [0, 1]
  const calculateThumbPosition = () => {
    if (rangeValue === 1) {
      return "0%";
    }
    if (rangeValue === 5) {
      return "100%";
    } else{
      return `${(rangeValue -1) * 25}%`;
    }
    
  };

  return (
    <>
      <div className="w-full md:h-[75px] xl:h-10 flex items-center justify-center xl:col-start-1 col-end-3 row-start-2 row-end-3">
        <input
          type="range"
          step={1}
          min={1}
          max={5}
          defaultValue={3}
          className="w-full appearance-none rounded-full cursor-pointer"
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            width: 3rem;
            height: 3rem;
            background-color: hsl(174, 86%, 45%);
            background-image: url(${bgnSlider});
            background-repeat: no-repeat;
            background-size: 50%;
            background-position: center;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            margin-top: -20px;
            -webkit-appearance: none;
            box-shadow: 0 20px 25px 8px #a5f3eb;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            background-color: hsl(174, 77%, 80%);
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 10px;
            border-radius: 50px;
            background: linear-gradient(
              to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${calculateThumbPosition()},
              hsl(224, 65%, 95%) ${calculateThumbPosition()},
              hsl(224, 65%, 95%) 100%
            );
          }
          @media (min-width:760px){
            input[type="range"]::-webkit-slider-thumb {
              width: 2.5rem;
              height: 40px;
              background-color: hsl(174, 86%, 45%);
              margin-top: -16px;
            }
            input[type="range"]::-webkit-slider-runnable-track {
              height: 8px;
              
            }
          }
        `}
      </style>
    </>
  );
};
