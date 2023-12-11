import { Fee } from "./Fee";
import { Promotion } from "./Promotion";

export const Card = () => {
  return (
    <main className="flex flex-col max-w-[40.875rem] h-[560px] md:h-[950px] max-h-[950px] text-grayishBlue border-2 border-red-600 rounded-lg w-full bg-White">
      <Fee />
      <Promotion />
    </main>
  );
};
