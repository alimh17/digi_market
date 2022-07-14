import React from "react";
import { BiStar } from "react-icons/bi";

import config from "../../../../config/config.json";
import { replacePrice } from "../../../../utils/replacePrice";
import AvalibleColor from "./AvalibleColor";

const { URL } = config;

const Cards = ({ item }) => {
  return (
    <article className="flex flex-colmd:flex md:flex-col md:items-center border md:justify-around border-b border-gray-300 my-2 article min-h-96 cursor-pointer rounded-md relative shadow-md transition-all duration-150 card">
      <AvalibleColor item={item} />
      <div className="flex  justify-center items-center w-full ">
        <img
          alt=""
          src={URL + item.mainImage}
          style={{ height: "10rem", backgroundSize: "cover" }}
        />
      </div>
      <div className="w-2/3 mx-3 flex flex-col justify-around items-center md:w-full ">
        <p className="p-3 w-full text-xs  font-sans text-gray-500 font-bold">
          {item.name}
        </p>
        <div className="w-full text-left p-3 flex items-center justify-between text-xs   md:text-base">
          <p className="text-gray-400 ">موجود در انبار</p>
          <span className="flex items-center ">
            {item.rate}
            <BiStar className="mx-2 text-yellow-500" />
          </span>
        </div>
        <div className="w-full text-center p-3  ">
          {replacePrice(item.price)} <span className="mx-2">تومان</span>
        </div>
      </div>
    </article>
  );
};

export default Cards;
