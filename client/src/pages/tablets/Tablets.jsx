import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabletContext } from "./context/tabletContext";
import MobileOrdering from "./tablet-products/components/mobile-ordering/MobileOrdering";
import TabletProducts from "./tablet-products/TabletProducts";
import TabletSidebar from "./tablet-sidebar/TabletSidebar";

const Tablets = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`md:mt-32 flex flex-col w-full font-sans `}>
      <div className="w-full px-10 text-base ">
        <h4 className="my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/tablets">تبلت</Link>
        </h4>
      </div>
      <div className="w-full flex ">
        <TabletContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <TabletSidebar />
          <TabletProducts />
          <MobileOrdering />
        </TabletContext.Provider>
      </div>
    </div>
  );
};

export default Tablets;
