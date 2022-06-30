import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileContext } from "./context/moibleContext";
import MobileOrdering from "./mobile-products/components/mobile-ordering/MobileOrdering";
import MobileProducts from "./mobile-products/MobileProducts";
import MobileSidebar from "./mobile-sidebar/MobileSidebar";

const Mobile = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`md:mt-32 flex flex-col w-full font-sans `}>
      <div className="w-full px-10 text-base ">
        <h4 className="my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/mobiles">موبایل</Link>
        </h4>
      </div>
      <div className="w-full flex ">
        <MobileContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <MobileSidebar />
          <MobileProducts />
          <MobileOrdering />
        </MobileContext.Provider>
      </div>
    </div>
  );
};

export default Mobile;
