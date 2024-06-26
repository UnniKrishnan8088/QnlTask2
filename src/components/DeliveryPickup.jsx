import BestSellers from "./BestSellers";

export default function DeliveryPickup() {
  return (
    <div className="p-2 sm:px-[5%]">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2  border border-[#A59F9F] rounded-[7px] overflow-hidden">
          <button className=" text-[12px] text-white bg-[#E94E18] p-2 sm:text-[1rem]">
            Delivery
          </button>
          <button className=" text-[12px] p-2 sm:text-[1rem]">Pickup</button>
        </div>
      </div>
      <BestSellers />
    </div>
  );
}
