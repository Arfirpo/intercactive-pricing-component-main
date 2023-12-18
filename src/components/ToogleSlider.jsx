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
        <div className="toggle__line flex w-9 h-5 md:w-[4.5rem] md:h-[2rem] xl:w-14 xl:h-7 bg-lightGrayishBlueTb rounded-full shadow-inner"></div>
        <div
          className={`toggle__dot absolute my-auto mx-0 w-4 md:w-7 xl:w-5 xl:h-5 h-4 md:h-7 top-0 bottom-0 left-1 bg-white rounded-full shadow ${
            isMonthly ? "" : "transform-translate"
          }`}
          
        ></div>
      </div>
    </label>
  );
};
