import React from "react";
import { FaHotjar, FaInfo, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavbarDown = () => {
  return (
    <>
      <ul className="w-full flex justify-around items-center my-3 md:hidden">
        <li className="flex">
          <div className="flex md:flex items-center">
            <FaSearch className="relative right-10 text-lg text-gray-400" />
            <input
              className="mx-3 w-full rounded-md bg-gray-200 border-0 outline-0 py-2 px-10"
              placeholder="جستجو"
            />
          </div>
        </li>
        <li className="list-none  md:w-1/3 md:flex justify-end mx-5">
          <FaInfo className="text-xl cursor-pointer text-gray-400" />
        </li>
      </ul>
      <ul className="hidden md:flex w-full my-5 px-5 ">
        <div className="flex w-3/4 ">
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duratin rounded-sm text-gray-400 px-1 mobile">
            <Link to="mobiles">موبایل</Link>
          </li>
          {/* <p className="text">sdkfasld;f</p> */}
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-1 laptop">
            <Link to="laptops">لپ تاپ</Link>
          </li>
          {/* <p className="text_2">text</p> */}
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-1">
            <Link to="tablet">تبلت</Link>
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-1">
            <Link to="console">کنسول بازی</Link>
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-1">
            <Link to="modem">مودم</Link>
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-1">
            <Link to="smart-watch">ساعت هوشمند</Link>
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-sm lg:text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-1">
            <Link to="tools">لوازم جانبی</Link>
          </li>
        </div>
        <div className="w-1/4 flex text-sm lg:text-lg justify-end items-center text-gray-400 ">
          <ul className="mx-5 flex">
            <li className="flex hover:border-b-red-400 transition-all duration-75 rounded-sm hover:border-b-2 cursor-pointer px-1">
              <FaHotjar className="text-red-500 mx-3 " />
              پر فروش ترین ها
            </li>
          </ul>
        </div>
      </ul>
    </>
  );
};

export default NavbarDown;
