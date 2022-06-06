import React from "react";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" w-full bg-white h-20 border-b border-b-gray-400 flex items-center justify-between ">
      <span className="mx-3 text-2xl md:hidden text-gray-500">
        <FaBars />
      </span>
      <ul className="flex px-3">
        <li className="text-2xl mx-3 text-gray-600 cursor-pointer">
          <IoNotificationsOutline />
        </li>
        <li className="text-2xl mx-3 text-indigo-600 cursor-pointer">
          <FaMoon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
