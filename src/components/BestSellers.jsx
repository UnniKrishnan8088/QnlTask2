import Card from "./Card";

export default function BestSellers() {
  return (
    <div>
      <h1 className="text-[1rem] font-bold mb-3 sm:text-[2rem] ">
        Best Sellers
      </h1>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-[1.6rem] md:grid-cols-4">
        <Card isAdd={false} />
        <Card isAdd={true} />
        <Card isAdd={true} />
        <Card isAdd={true} />
      </div>
    </div>
  );
}
