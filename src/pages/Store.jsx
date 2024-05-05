import StoreName from "../components/StoreName";
import StoreNav from "../components/StoreNav";

export default function Store() {
  return (
    <div className="relative">
      <img
        src="/public/assets/store-banner.jpeg"
        className="w-full rounded-br-[90px] rounded-bl-[90px] h-[18.5rem]"
        alt=""
      />
      <div className="absolute inset-0">
        <StoreNav />
        <div className="w-full flex items-center justify-center">
          <img
            className="w-[6.25rem] h-[6.375rem] rounded-[1.875rem] mt-10"
            src="/public/assets/chicken.png"
            alt=""
          />
        </div>
        <StoreName />
      </div>
    </div>
  );
}
