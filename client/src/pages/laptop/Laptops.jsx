import React, { useState } from "react";
import { Link } from "react-router-dom";
import LaptopOrdering from "./laptop-product/components/laptop-ordering/LaptopOrdering";
import LaptopProduct from "./laptop-product/LaptopProduct";
import { LaptopContext } from "./context/LaptopContext";
import LaptopSidebar from "./laptop-sidebar/LaptopSidebar";

const Laptops = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`md:mt-32 flex flex-col w-full`}>
      <div className="w-full px-10 text-xl">
        <h3 className=" my-4">
          <Link to="/">دیجی مارکت</Link> / <Link to="/laptops">لپ تاپ</Link>
        </h3>
      </div>
      <div className="w-full flex">
        <LaptopContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <LaptopSidebar />
          <LaptopProduct />
          <LaptopOrdering />
        </LaptopContext.Provider>
      </div>
    </div>
  );
};

export default Laptops;
