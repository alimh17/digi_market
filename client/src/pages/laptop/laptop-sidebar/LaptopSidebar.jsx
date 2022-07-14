import React from "react";
import Brand from "./components/brand/Brand";
import Color from "./components/color/Color";
import RangePrice from "./components/range-price/RangePrice";
import Weigtht from "./components/weight/Weight";
import CpuSeries from "./components/cpu_series/CpuSeries";
import Screen from "./components/screen/Screen";
import RamType from "./components/ram_type/RamType";
import Ram from "./components/ram/Ram";

const LaptopSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-2/3 overflow-y-auto font-sans">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand />
        <RangePrice />
        <Color />
        <Weigtht />
        <CpuSeries />
        <Screen />
        <RamType />
        <Ram />
        {/* <Network /> */}
      </div>
    </div>
  );
};

export default LaptopSidebar;
