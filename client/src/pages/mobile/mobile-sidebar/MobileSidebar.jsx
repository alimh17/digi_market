import React from "react";
import { mobileBrnads } from "../../../data/mobileBrnads";

import Brand from "./components/brands/Brand";
import Color from "./components/color/Color";
import Network from "./components/network/Network";
import Ram from "./components/ram/Ram";
import RangePrice from "./components/range_price/RangePrice";
import Weight from "./components/weight/Weight";

const MobileSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-fit overflow-y-scroll  font-sans Sidebar">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand />
        <Color />
        <RangePrice />
        <Network />
        <Weight />
        <Ram />
      </div>
    </div>
  );
};

export default MobileSidebar;
