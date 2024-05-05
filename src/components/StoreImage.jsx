export default function StoreImage({ offer, reccommended }) {
  return (
    <div className="w-[7.31rem] h-[5.75rem] rounded-lg relative">
      {reccommended && (
        <div className="absolute top-1 right-[-2px] bg-[#FF4848]  px-[8px]   ">
          <p className="font-normal text-white text-[9px]">RECCOMMENDED</p>
        </div>
      )}
      <img
        className="w-full h-full object-cover rounded-lg"
        src="/public/assets/productImg.png"
        alt=""
      />
      {offer && (
        <div className="rounded-sm bg-white absolute bottom-[-6px] w-[90%] mx-1">
          <p className="text-red-600 text-[13px] font-semibold text-center">
            30% OFF
          </p>
        </div>
      )}
    </div>
  );
}
