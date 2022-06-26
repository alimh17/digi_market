import React from "react";
import Brand from "./components/brand/Brand";

const LaptopSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-auto overflow-y-auto md:sticky top-36 font-sans">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand />
        {/* <Color /> */}
        {/* <RangePrice /> */}
        {/* <Type /> */}
        {/* <Network /> */}
        {/* <Weight /> */}
        {/* <Ram /> */}
      </div>
    </div>
  );
};

export default LaptopSidebar;
