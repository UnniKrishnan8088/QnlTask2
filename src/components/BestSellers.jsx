import Card from "./Card";

export default function BestSellers() {
  return (
    <div>
      <h1 className="text-[1rem] font-bold mb-3 sm:text-[2rem] ">
        Best Sellers
      </h1>
      <div className="grid grid-cols-2 gap-2 ">
        <Card isAdd={false} />
        <Card isAdd={true} />
      </div>
    </div>
  );
}
