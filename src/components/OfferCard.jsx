export default function OfferCard({ offer, code }) {
  return (
    <div className="border border-gray-300 p-1 rounded-[5px]">
      <div className="flex items-center gap-1 ">
        <img src="/public/assets/Sale.png" alt="offer" />
        <h3 className="text-[12px] text-[#504A4A] font-semibold">{offer}</h3>
      </div>
      <p className="text-[12px] text-[#7B7777]">{code}</p>
    </div>
  );
}
