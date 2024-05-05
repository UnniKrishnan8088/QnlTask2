import React from "react";

export default function Card({ isAdd }) {
  return (
    <div>
      <div className="relative">
        <img
          src="/public/assets/card-image.png"
          alt="img"
          className="rounded-[7px]"
        />
        <div className="border border-gray-400 absolute bg-white bottom-[-.8rem] left-0 right-0 w-[5.75rem] m-auto flex items-center justify-center rounded-[3px] overflow-hidden">
          <button className="relative w-full py-1 rounded-[3px] text-[#A5120B] font-semibold text-[14px]">
            ADD
            <button className="absolute top-0 right-1">+</button>
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="text-[1rem]">Sumac Wings</h5>
        <p className="text-[10px] md:text-[12px]">
          Lipsmacking ginger and fresh green spicy marinade.
        </p>
        {isAdd ? (
          <p className="text-[#A5120B] text-[.8rem] font-semibold cursor-pointer">
            Add Options
          </p>
        ) : (
          <p className="text-[.8rem]">AED 250</p>
        )}
      </div>
    </div>
  );
}
