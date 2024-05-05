import React from "react";

import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between sm:px-7 border-b border-gray-400 border-opacity-50">
        <p className="flex items-center sm:text-xl ">
          Edappally, Kochi
          <span className=" text-red-500 mt-1 ml-1">
            <FaChevronDown />
          </span>
        </p>
        <img
          className="w-[72px] h-[72px]"
          src="/public/assets/home-logo.png"
          alt=""
        />
      </nav>
    </div>
  );
}
