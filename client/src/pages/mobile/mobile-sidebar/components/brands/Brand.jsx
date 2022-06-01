import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import _ from "lodash";
import AllBrands from "./components/AllBrands";
import { FaSearch } from "react-icons/fa";
import { brandConvertToPersian } from "../../../../../utils/brnadConverToPersian";
import { useDispatch, useSelector } from "react-redux";

const Brand = () => {
  const [showBrand, setShowBrand] = useState(false);

  const dispatch = useDispatch();
  const selectedBrand = useSelector((state) => state.mobiles);
  const { brands } = selectedBrand;

  const handleBrandToggle = () => {
    setShowBrand(!showBrand);
  };

  return (
    <section className=" py-5 border-b">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleBrandToggle()}
      >
        <h2 className="mx-5 text-xl">برند</h2>
        {selectedBrand && brands && brands.length !== 0 ? (
          <span
            className={`w-2 h-2 rounded-full bg-sky-300 relative right-56 ${
              showBrand && "hidden"
            }`}
          ></span>
        ) : null}
        <BsChevronUp
          className={`mx-5 text-xl transition-all ease-linear duration-150 ${
            showBrand && "rotate-180"
          }`}
        />
      </div>
      <div
        className={`w-full flex flex-col justify-center items-center ${
          !showBrand && "hidden"
        }`}
      >
        <input
          placeholder="جستجو..."
          className="border-2 w-2/3 rounded-md p-3 m-3  outline-none pr-14"
        />
        <FaSearch className="absolute left-3/4 text-2xl" />
      </div>
      {brands ? (
        <ul className={`${!showBrand && "hidden"} flex`}>
          {brands.map((brand, index) => (
            <li key={index} className="p-3 border-2 my-1 rounded-lg mx-2">
              {brandConvertToPersian(brand)}
            </li>
          ))}
        </ul>
      ) : null}
      <AllBrands show={showBrand} />
    </section>
  );
};

export default Brand;
