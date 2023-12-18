import { Fee } from "./Fee";
import { Promotion } from "./Promotion";

export const Card = () => {
  return (
    <main className="flex flex-col items-center w-[90%] sm:w-[80%] lg:w-[55%] xl:w-[37.5%] h-[70vh]  md:h-[75%] lg:h-[50vh] text-grayishBlue rounded-lg bg-White shadow-[-0_13px_20px_-3px_rgba(0,0,0,0.1)]">
      <Fee />
      <Promotion />
    </main>
  );
};
