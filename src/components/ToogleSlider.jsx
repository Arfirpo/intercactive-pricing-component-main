import React, { useState } from "react";

export const ToggleSlider = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="toggle__line flex w-10 h-4 bg-lightGrayishBlueTb rounded-full shadow-inner"></div>
        <div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow ${
            isChecked ? "transform-translate" : ""
          }`}
        ></div>
      </div>
      <style>
        {`

          .toggle__line {
            transition: background-color 0.3s;
          }
          .toggle__line:hover {
            background: hsl(174, 77%, 80%);
            
          }
          
          .toggle__dot {
            width: 12px;
            height: 70%;
            top: 0;
            bottom: 0;
            margin: auto 0;
            left: 3px;
            transition: transform 0.3s;
          }
          
          /* Estilo cuando el toggle está activado */
          input:checked + .toggle__line {
            background-color: hsl(174, 86%, 45%); /* Color de fondo cuando está activado */
          }
          
          /* Estilo personalizado para la animación del círculo */
          .transform-translate {
            transform: translateX(190%); /* Mueve el punto a la derecha cuando está activado */
          }
        `}
      </style>
    </label>
  );
};
