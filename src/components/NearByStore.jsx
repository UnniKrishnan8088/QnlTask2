import Product from "./Product";

export default function NearByStore() {
  return (
    <div className="mt-[1rem]">
      <h1 className="text-[1rem] font-bold sm:text-[2rem] mb-3">
        Nearby Store
      </h1>
      <div className="grid grid-cols-1 gap-[1.6rem] sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3">
        <Product offer={true} />
        <Product offer={true} reccommended={true} />
        <Product />
        <Product reccommended={true} />
        <Product offer={true} />
        <Product />
        <Product offer={true} />
        <Product reccommended={true} />
      </div>
      <div className="flex items-center justify-center">
        <button className="text-[14px] w-full p-2 my-3 rounded-[5px] bg-[#2A7BF5] text-white sm:w-[200px]">
          View More
        </button>
      </div>
    </div>
  );
}
