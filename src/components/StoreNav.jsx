import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function StoreNav() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between py-2 px-4 sm:px-[5%]">
      <button
        onClick={() => navigate(-1)}
        className="w-[2.063rem] h-[2.063rem] bg-white rounded-full flex items-center justify-center"
      >
        <FaArrowLeftLong />
      </button>
      <div className="flex gap-[1rem]">
        <button className="w-[2.063rem] h-[2.063rem] bg-white rounded-full flex items-center justify-center">
          <IoSearch />
        </button>
        <button className="w-[2.063rem] h-[2.063rem] bg-white rounded-full flex items-center justify-center">
          <FiSend />
        </button>
      </div>
    </nav>
  );
}
