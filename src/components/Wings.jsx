import React from "react";
import WingsCard from "./WingsCard";

export default function Wings() {
  return (
    <div className="px-2 sm:px-[5%]">
      <h1 className="text-[1rem] font-bold mb-3 mt-4 sm:text-[2rem] ">Wings</h1>
      <div className="grid grid-cols-1 gap-2 w-full sm:grid-cols-2 sm:gap-[2rem] xl:grid-cols-3">
        <WingsCard bestseller={true} />
        <WingsCard />
        <WingsCard bestseller={true}/>
        <WingsCard />
        <WingsCard />
      </div>
    </div>
  );
}
