import { Fee } from "./Fee";
import { Promotion } from "./Promotion";

export const Card = () => {
  return (
    <main className="flex flex-col items-center w-[95%] sm:h-[60%] md:w-[85%] xl:w-[37.5%] h-[560px] md:h-[75%] xl:h-[50%] text-grayishBlue border-2 border-red-600 rounded-lg bg-White">
      <Fee />
      <Promotion />
    </main>
  );
};
