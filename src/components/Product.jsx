import StoreImage from "./StoreImage";
import { FaStar, FaRegClock } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { CiMapPin } from "react-icons/ci";

export default function Product({offer}) {
  return (
    <div className="flex gap-[1rem] w-full ">
      <StoreImage offer={offer} />
      <div className="w-full">
        <h3 className="text-[0.875rem] font-semibold">Viceroy Restaurant</h3>
        <p className="text-[10px] text-gray-400">
          Lorem ipsum dolor lorem ipsum dolo... <br /> New Bus Stand, Kasaragod
        </p>
        <div className="w-full flex items-center gap-[.5rem] border-t border-gray-400 border-opacity-50">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 text-[11px]" />
            <p className="text-[12px] font-medium">4.5</p>
          </div>
          <div className="flex items-center">
            <FaRegClock className="text-[11px]" />
            <p className="text-[12px] font-medium">45 Mins</p>
          </div>
          <div className="flex items-center">
            <IoMdCalendar className="text-[11px]" />
            <p className="text-[12px] font-medium">250 for two</p>
          </div>
          <div className="flex items-center">
            <CiMapPin className="text-[11px]" />
            <p className="text-[12px] font-medium">5 Km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
