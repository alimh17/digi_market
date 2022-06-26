import React, { useContext, useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  mobileSortByCheapest,
  mobileSortByExpensive,
  mobileSortBySell,
  mobileSortByView,
} from "../../../../actions/mobilesActions";
import { orderingAction } from "../../../../actions/orderingAction";
import { mobile } from "../../../../data/mobile";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";
import { LaptopContext } from "../../context/LaptopContext";

const Ordering = ({ active, setActive }) => {
  const context = useContext(LaptopContext);

  const dispatch = useDispatch();

  useEffect(() => {
    let copyActive = new Array(5).fill(false);
    copyActive[1] = true;
    setActive(copyActive);
  }, [setActive]);

  const handleActive = (e) => {
    let copyActive = new Array(5).fill(false);
    copyActive[e.target.id - 1] = true;
    setActive(copyActive);
  };

  return (
    <div className="md:flex justify-between md:absolute w-full md:w-2/3 items-center md:h-20 border-b py-3 font-sans">
      <span className="text-gray-400 mx-3 flex ">
        <span className="flex items-center text-lg font-bold text-black">
          <BiSort className="mx-2" />
          <p className="hidden lg:flex">مرتب سازی :</p>
          <p
            className="flex lg:hidden"
            onClick={() => {
              dispatch(orderingAction());
            }}
          >
            {context.grouping}
          </p>
        </span>
        <ul className="hidden lg:flex">
          <li
            id={1}
            className={`${
              active[0] ? "active" : "deactive"
            } mx-3 p-2  cursor-pointer text-sm xl:text-base `}
            onClick={(e) => {
              //   dispatch(mobileSortBySell());
              handleActive(e);
            }}
          >
            پرفروش ترین
          </li>
          <li
            id={2}
            className={`mx-3 p-2  cursor-pointer text-sm xl:text-base ${
              active[1] ? "active" : "text-black"
            }`}
            onClick={(e) => {
              handleActive(e);
              //   dispatch(mobileSortByView());
            }}
          >
            پربازدید ترین
          </li>
          <li
            id={3}
            className={`mx-3 p-2  cursor-pointer text-sm xl:text-base ${
              active[2] ? "active" : "deactive"
            }`}
            onClick={(e) => handleActive(e)}
          >
            جدید ترین
          </li>
          <li
            id={4}
            className={`mx-3 p-2  cursor-pointer text-sm xl:text-base ${
              active[3] ? "active" : "deactive"
            }`}
            onClick={(e) => {
              handleActive(e);
              //   dispatch(mobileSortByCheapest());
            }}
          >
            ارزان ترین
          </li>
          <li
            id={5}
            className={`mx-3 p-2  cursor-pointer text-sm xl:text-base ${
              active[4] ? "active" : "deactive"
            }`}
            onClick={(e) => {
              handleActive(e);
              //   dispatch(mobileSortByExpensive());
            }}
          >
            گران ترین
          </li>
        </ul>
      </span>
      <span className="hidden md:flex items-center mx-3 text-gray-400">
        {replaceNumberToPersian(mobile.length)} <p className="mx-2 ">کالا</p>
      </span>
    </div>
  );
};

export default Ordering;
