import React from 'react'

export const RangeBar = () => {
  return (
    <>
      <div className="w-full h-[30px] flex items-center justify-center">
          <input
            type="range"
            className="w-full appearance-none h-3 border-2 rounded-full"
          />
        </div>
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              width: 30px;
              height: 30px;
              background-color: #4CAF50;
              border: none;
              border-radius: 50%;
              cursor: pointer;
              -webkit-appearance: none;
            }
          `}
        </style>
    </>
  )
}
