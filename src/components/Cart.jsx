import { MdCurrencyRupee } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";

export default function Cart() {
  return (
    <div className="bg-[#43BF09] text-white mt-2 p-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="flex items-center text-[14px] font-semibold">
            <MdCurrencyRupee />
            <span>250.00 | 2 Items</span>
          </p>
          <p className="text-[9px]">Delivery Charges and Tax May Apply</p>
        </div>
        <div>
          <p className="flex items-center gap-2 cursor-pointer">
            VIEW CART <IoBagHandleOutline />
          </p>
        </div>
      </div>
    </div>
  );
}
