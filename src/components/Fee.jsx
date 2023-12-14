import React, { useState } from "react";
import { RangeBar } from "./RangeBar";
import { ToggleSlider } from "./ToogleSlider";
import bgnSlider from "../images/icon-slider.svg";

export const Fee = () => {
  const [rangeValue, setRangeValue] = useState(3);
  const [isMonthly, setToggleValue] = useState(false);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const calculateThumbPosition = () => {
    if (rangeValue === 1) {
      return "0%";
    }
    if (rangeValue === 5) {
      return "100%";
    } else {
      return `${(rangeValue - 1) * 25}%`;
    }
  };

  const handleToggleChange = (e) => {
    setToggleValue(e.target.checked);
  };

  const pricingDeets = {
    1: {
      pageviews: "10k",
      monthly: 8,
      yearly: 72,
    },
    2: {
      pageviews: "50k",
      monthly: 12,
      yearly: 108,
    },
    3: {
      pageviews: "100k",
      monthly: 16,
      yearly: 144,
    },
    4: {
      pageviews: "500k",
      monthly: 24,
      yearly: 216,
    },
    5: {
      pageviews: "1M",
      monthly: 36,
      yearly: 324,
    },
  };

  return (
    <section className="flex flex-col justify-evenly items-center w-[84%] h-[70%] lg:gap-6 pb-9 lg:pb-4">
      <div className="flex flex-col justify-evenly h-[75%] w-full text-center  xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:place-items-center">
        <h1 className="text-sm md:text-[1.5rem] xl:text-sm font-bold justify-self-start">
          <span className="uppercase mr-1">
            {pricingDeets[rangeValue].pageviews}
          </span>
          PAGEVIEWS
        </h1>
        <RangeBar value={rangeValue} onChange={handleRangeChange} />
        <p className="flex items-center justify-center gap-2 text-xs md:text-2xl xl:text-sm xl:justify-self-end">
          <span className="text-darkDesaturatedBlue font-bold  text-4xl md:text-3xl">
            $
          </span>
          <span className="text-darkDesaturatedBlue font-bold  text-4xl md:text-4xl ">
            {pricingDeets[rangeValue][isMonthly ? "monthly" : "yearly"]}
          </span>
          / <span>{isMonthly ? "Month" : "Year"}</span>
        </p>
      </div>
      <div className=" text-[.7rem] mbl:text-xs md:text-sm flex items-center justify-evenly xl:justify-end xl:gap-8 w-full h-[15%]">
        <p>Monthly Billing</p>
        <ToggleSlider checked={isMonthly} onChange={handleToggleChange} />
        <p>Year Billing</p>
        <div className="border-none text-lightRed bg-lightGrayishRed px-2 py-1 rounded-full">
          <p>-25%</p>
        </div>
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
          @media (min-width:768px){
            input[type="range"]::-webkit-slider-thumb {
              width: 2.5rem;
              height: 40px;
              background-color: hsl(174, 86%, 45%);
              margin-top: -16px;
            }
            input[type="range"]::-webkit-slider-runnable-track {
              height: 8px;
            }
            .toggle__line {
              transition: background-color 0.3s;
            }
            .toggle__line:hover {
              background: hsl(174, 77%, 80%);
            }
          }
            
          .toggle__dot {
              transition: transform 0.3s;
            }
            
            /* Estilo cuando el toggle está activado */
            input:checked + .toggle__line {
              background-color: hsl(174, 86%, 45%); /* Color de fondo cuando está activado */
            }
            
            /* Estilo personalizado para la animación del círculo */
            .transform-translate {
              transform: translateX(100%); /* Mueve el punto a la derecha cuando está activado */
            }
            @media (min-width:46.875rem){
              .transform-translate {
                transform: translateX(142%);
              }
            }
          }
        `}
      </style>
    </section>
  );
};
