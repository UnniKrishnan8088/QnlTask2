import DeliveryPickup from "../components/DeliveryPickup";
import OfferCard from "../components/OfferCard";
import Searchbar from "../components/Searchbar";
import Slider from "../components/Slider";
import StoreName from "../components/StoreName";
import StoreNav from "../components/StoreNav";
import Wings from "../components/Wings";

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
        <div className="grid grid-cols-2 gap-2 mt-5 px-2 sm:px-[5%]">
          <OfferCard offer="GET FLAT 30% OFF" code="Use code GET30" />
          <OfferCard offer="BUY 1 GET 1 OFFER" code="Use code BOGO" />
          <div className="border-custom col-span-2 ">
            <Searchbar />
          </div>
          <div className="col-span-2 ">
            <Slider />
          </div>
        </div>
        <DeliveryPickup />
        <Wings />
      </div>
    </div>
  );
}
