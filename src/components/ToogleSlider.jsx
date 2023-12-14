import React, { useState } from "react";

export const ToggleSlider = ({ checked, onChange }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    const newIsMonthly = !isMonthly;
    setIsMonthly(newIsMonthly);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          onChange={onChange}
          checked={checked}
          onClick={handleToggle}
        />
        <div className="toggle__line flex w-[3rem] md:w-[5.5rem] h-[1.6rem] md:h-[2.625rem] xl:w-14 xl:h-7 bg-lightGrayishBlueTb rounded-full shadow-inner"></div>
        <div
          className={`toggle__dot absolute my-auto mx-0 w-5 md:w-8 xl:w-5 xl:h-5 h-5 md:h-8 top-0 bottom-0 left-1 bg-white rounded-full shadow ${
            isMonthly ? "" : "transform-translate"
          }`}
          
        ></div>
      </div>
    </label>
  );
};
