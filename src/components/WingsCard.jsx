import { FaStar } from "react-icons/fa";
export default function WingsCard({ bestseller }) {
  return (
    <div className="w-full flex justify-between border-t-[1.5px] py-3">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <img
            src="/public/assets/Vector.png"
            alt="vector"
            className="w-3 h-3"
          />
          {bestseller && (
            <p className="text-[#F8C246] flex items-center text-[12px]">
              <FaStar /> Bestseller
            </p>
          )}
        </div>
        <h4 className="text-[1rem] font-semibold">Fiery Sriracha Wings</h4>
        <p className="text-[#A5120B] text-[.8rem] font-semibold cursor-pointer">
          Add Options
        </p>
        <p className="text-[12px] text-[#777777]">Fast food, Arabic</p>
      </div>
      <div className="relative">
        <img
          src="/public/assets/wings.png"
          alt="img"
          className="w-[6.56rem] h-[5.12rem] rounded-[7px]"
        />
        {bestseller ? (
          <div className="border border-gray-400 absolute bg-white bottom-[-.8rem] left-0 right-0 w-[4.75rem] m-auto flex items-center justify-center rounded-[3px] overflow-hidden">
            <button className="flex items-center justify-center gap-2 relative w-full py-1 rounded-[3px] text-[#A5120B] font-semibold text-[14px]">
              <span>-</span> 1 <span>+</span>
            </button>
          </div>
        ) : (
          <div className="border border-gray-400 absolute bg-white bottom-[-.8rem] left-0 right-0 w-[4.75rem] m-auto flex items-center justify-center rounded-[3px] overflow-hidden">
            <button className="relative w-full py-1 rounded-[3px] text-[#A5120B] font-semibold text-[14px]">
              ADD
              <button className="absolute top-0 right-1">+</button>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
