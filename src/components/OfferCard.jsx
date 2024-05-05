export default function OfferCard({ offer, code }) {
  return (
    <div className="border border-gray-300 p-1 rounded-[5px] md:p-2">
      <div className="flex items-center gap-1 ">
        <img
          src="/public/assets/Sale.png"
          alt="offer"
          className="md:w-[2rem]"
        />
        <h3 className="text-[12px] text-[#504A4A] font-semibold md:text-[1rem]">
          {offer}
        </h3>
      </div>
      <p className="text-[12px] text-[#7B7777] md:text-[.8rem]">{code}</p>
    </div>
  );
}
