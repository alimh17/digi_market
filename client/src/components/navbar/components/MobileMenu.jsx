import React from "react";
import { FaTimes } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./navbar.css";

const MobileMenu = ({ show, hidden }) => {
  const handleHiddenMenu = () => {
    hidden(false);
  };

  return (
    <div
      className={`${show ? "show" : "hiden"} bg-white h-full opacity-100 fixed`}
    >
      <ul className="w-full">
        <div className="w-full flex justify-center items-center py-10">
          <h1
            className="brand text-red-500 text-2xl"
            onClick={handleHiddenMenu}
          >
            <Link to="/">Digi Market</Link>
          </h1>
        </div>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={handleHiddenMenu}
        >
          <Link to="mobiles" className="flex justify-between w-full text-xl">
            موبایل
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={handleHiddenMenu}
        >
          <Link to="laptop" className="flex justify-between w-full text-xl">
            لپ تاپ
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className="t px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={handleHiddenMenu}
        >
          <Link to="tablet" className="flex justify-between w-full text-xl">
            تبلت
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={handleHiddenMenu}
        >
          <Link to="console" className="flex justify-between w-full text-xl">
            کنسول بازی
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={handleHiddenMenu}
        >
          <Link to="modem" className="flex justify-between w-full text-xl">
            مودم
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={() => hidden(false)}
        >
          <Link
            to="smart-watch"
            className="flex justify-between w-full text-xl"
          >
            ساعت هوشمند
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full"
          onClick={() => hidden(false)}
        >
          <Link to="tools" className="flex justify-between w-full text-xl">
            لوازم جانبی
            <RiArrowLeftSLine />
          </Link>
        </li>
      </ul>
      <FaTimes
        className="absolute m-5 top-0 left-0 text-xl text-red-500"
        onClick={() => hidden(false)}
      />
    </div>
  );
};

export default MobileMenu;
