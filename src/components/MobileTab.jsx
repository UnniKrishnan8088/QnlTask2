import { IoLocationOutline, IoBagOutline } from "react-icons/io5";
import { CiSearch, CiUser } from "react-icons/ci";

export default function MobileTab() {
  return (
    <div className="flex items-center justify-between fixed bottom-0 left-0 right-0 bg-white px-[1rem] py-2 shadow-custom sm:justify-evenly">
      <div className="flex flex-col items-center">
        <IoLocationOutline className="w-[1.6rem] h-[2rem]" />
        <p className="text-[10px]">Near Me</p>
      </div>
      <div className="flex flex-col items-center">
        <CiSearch className="w-[1.6rem] h-[2rem]" />
        <p className="text-[10px]">Near Me</p>
      </div>
      <div className="flex flex-col items-center relative">
        <p className="bg-[#E21C1A] w-[1rem] h-[1rem] flex items-center justify-center rounded-full text-white text-[10px] absolute right-0 top-[-6px]">
          0
        </p>
        <IoBagOutline className="w-[1.6rem] h-[2rem]" />
        <p className="text-[10px]">Near Me</p>
      </div>
      <div className="flex flex-col items-center">
        <CiUser className="w-[1.6rem] h-[2rem]" />
        <p className="text-[10px]">Near Me</p>
      </div>
    </div>
  );
}
