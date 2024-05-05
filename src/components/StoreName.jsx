export default function StoreName() {
  return (
    <div className="bg-white w-[15.62rem] m-auto mt-[2.6rem] p-[1rem] rounded-[1rem] border border-[#838282] sm:w-[22rem] sm:mt-[2.7rem] ">
      <div className="flex justify-between">
        <h3 className="text-[0.86rem] font-semibold">Store Name</h3>
        <div className="w-[1rem] h-[1rem] bg-[#64BA02] rounded-full"></div>
      </div>
      <p className="text-[10px] text-[#6F6E6E] mb-2">
        16B 8th Street, Oud Metha, Dubai
      </p>
      <div className="flex items-center justify-between border-t border-gray-400 pt-1 sm:grid sm:grid-cols-3 sm:text-center">
        <p className="text-[8px] font-semibold border-r border-gray-400 px-1">
          Distance: 4km
        </p>
        <p className="text-[8px] font-semibold border-r border-gray-400 px-1">
          Delivery Time: 45mins
        </p>
        <p className="text-[8px] font-semibold px-1">More Info</p>
      </div>
    </div>
  );
}
