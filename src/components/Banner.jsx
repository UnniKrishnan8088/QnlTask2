export default function Banner() {
  return (
    <div>
      <h1 className="text-[1rem] font-bold mb-3 sm:text-[2rem] ">Promo Banner</h1>
      <img
        className="w-full h-[181px] rounded-xl sm:h-[25rem]"
        src="/public/assets/qnl-banner.png"
        alt="banner"
      />
    </div>
  );
}
