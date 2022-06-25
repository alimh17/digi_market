import React from "react";
import { BiCart } from "react-icons/bi";
import { FaBars, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ModalRoot from "../../modal-root/ModalRoot";

import "./navbar.css";

const NavbarUp = ({ show }) => {
  const cart = useSelector((state) => state.cart);

  const location = useLocation();

  return (
    <ul className="flex w-full content-between font-sans">
      <li className="list-none flex w-full md:w-2/3 justify-between items-center md:justify-start">
        <Link to="/dashboard">dashboard</Link>
        <FaBars className="md:hidden mx-3 text-lg" onClick={() => show(true)} />
        <h3 className="mx-5 text-2xl text-red-400 font-extrabold cursor-pointer brand">
          <Link to="/">Digi Market</Link>
        </h3>
        <div className="w-1/2 hidden md:flex items-center">
          <FaSearch className="relative right-10 text-lg text-gray-400" />
          <input
            className="mx-3 w-full rounded-md bg-gray-200 border-0 outline-0 py-2 px-10"
            placeholder="جستجو"
          />
        </div>
        <Link to="/cart" className="md:hidden">
          {cart.length > 0 && (
            <span className="bg-rose-600 w-5 h-5 flex justify-center items-center rounded-full text-gray-100 md:hidden">
              {cart.length}
            </span>
          )}
          <BiCart className="text-2xl cursor-pointer text-gray-400  mx-3" />
        </Link>
      </li>
      <li className="list-none hidden md:w-1/3 md:flex justify-end mx-5">
        {cart.length > 0 && (
          <span className="bg-rose-600 w-5 h-5 flex justify-center items-center rounded-full text-gray-100 ">
            {cart.length}
          </span>
        )}
        <div className={`${location.pathname !== "/cart" && "group"}`}>
          <Link to="/cart">
            <span>
              <BiCart className="text-2xl cursor-pointer text-gray-400 " />
            </span>
          </Link>
          <ModalRoot />
        </div>
      </li>
    </ul>
  );
};

export default NavbarUp;
