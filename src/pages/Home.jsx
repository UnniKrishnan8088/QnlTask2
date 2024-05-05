import Banner from "../components/Banner";
import MobileTab from "../components/MobileTab";
import Navbar from "../components/Navbar";
import NearByStore from "../components/NearByStore";

export default function Home() {
  return (
    <div className="px-2 pb-[6rem] sm:px-[5%] relative">
      <Navbar />
      <Banner />
      <NearByStore />
      <MobileTab />
    </div>
  );
}
