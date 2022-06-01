import React, { createRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";

import { mobileBrnads } from "../../../../../../data/mobileBrnads";
import { brandConvertToPersian } from "../../../../../../utils/brnadConverToPersian";
import { brandSort, changeCheckbox } from "../utils/checkboxAndSort";

//styleSheet
import style from "./allBrands.module.css";
import { sortMobilesByBrand } from "../../../../../../actions/mobilesActions";

const AllBrands = ({ show }) => {
  const brandRef = useRef([]);
  const dispatch = useDispatch();
  const brandMobiles = useSelector((state) => state.mobiles);
  const { brands } = brandMobiles;

  brandRef.current = mobileBrnads.map(
    (_, i) => brandRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getBrands = brandSort(brands, item);
    dispatch(sortMobilesByBrand(getBrands));

    changeCheckbox(brandRef, item);
  };

  return (
    <>
      <div className={`w-full ${!show && "hidden"}`}>
        {mobileBrnads.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b cursor-pointer"
            onClick={(e) => handleCheckbox(e, item)}
          >
            <span className=" p-3 flex items-center">
              <input
                type="checkbox"
                className={`w-5 h-5 rounded-lg  ${item.name} checked:bg-slate-400 ${style.checkbox}`}
                defaultChecked={
                  brands && brands !== 0 && brands.includes(item.name)
                    ? "checked"
                    : null
                }
                ref={brandRef.current[index]}
                onClick={(e) =>
                  e.target.checked
                    ? (e.target.checked = false)
                    : (e.target.checked = true)
                }
              />
              <TiTick className={` ${style.tick} text-4xl`} />
              <span className={`${style.replace}`}></span>
              <h2 className="p-3 md:text-2xl text-gray-500">
                {brandConvertToPersian(item.name)}
              </h2>
            </span>
            <h2 className="my-auto mx-3 text-gray-400 md:text-md">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBrands;
