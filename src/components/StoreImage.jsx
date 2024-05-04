export default function StoreImage({ offer }) {
  return (
    <div className="w-[6.31rem] h-[5.75rem] rounded-lg relative">
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
