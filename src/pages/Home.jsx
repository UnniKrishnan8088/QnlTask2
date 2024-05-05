import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import NearByStore from "../components/NearByStore";

export default function Home() {
  return (
    <div className="px-[1rem] sm:px-[5%]">
      <Navbar />
      <Banner />
      <NearByStore />
    </div>
  );
}
