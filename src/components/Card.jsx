import { Fee } from "./Fee";
import { Promotion } from "./Promotion";

export const Card = () => {
  return (
    <main className="flex flex-col items-center w-[90%] sm:w-[80%] lg:w-[55%] xl:w-[37.5%] h-[70vh]  md:h-[75%] lg:h-[50vh] text-grayishBlue rounded-lg bg-White">
      <Fee />
      <Promotion />
    </main>
  );
};
