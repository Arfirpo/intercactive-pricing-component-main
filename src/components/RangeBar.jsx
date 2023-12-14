export const RangeBar = ({ value, onChange }) => {
  // Función para calcular la posición relativa del pulgar en el rango [0, 1]
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
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
