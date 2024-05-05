import { CiSearch } from "react-icons/ci";

export default function Searchbar() {
  return (
    <div className="flex items-center gap-1 border border-[#A6A4A4] px-2 rounded-[5px] mt-3">
      <input
        type="text"
        placeholder="search menu"
        className="placeholder:text-[12px] text-[12px] outline-none border-none p-3 flex-1 "
      />
      <div className="">
        <CiSearch className=" w-[1.37rem] h-[1.37rem] text-[#A6A4A4]" />
      </div>
    </div>
  );
}
