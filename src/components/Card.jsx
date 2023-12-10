import { Fee } from "./Fee";
import { Promotion } from "./Promotion";

export const Card = () => {
  return (
    <div className="flex flex-col max-w-[33.75rem] h-[400px] max-h-[400px] text-grayishBlue border-2 border-red-600 rounded-lg w-full min-h-[60vh] py-[25px] bg-White">
      <Fee />
      <Promotion />
    </div>
  );
};
