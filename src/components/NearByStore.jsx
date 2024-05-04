import Product from "./Product";

export default function NearByStore() {
  return (
    <div className="mt-[1rem]">
      <h1 className="text-[1rem] font-bold sm:text-[2rem]">Nearby Store</h1>
      <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2  lg:grid-cols-3">
        <Product offer={true} />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
