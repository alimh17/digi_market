import React from "react";
import { BiStar } from "react-icons/bi";
import { replacePrice } from "../../../../utils/replacePrice";

import config from "../../../../config/config.json";
import { switchColorFa } from "../../../../utils/switchColor";

const { URL } = config;

const LaptopCart = ({ item }) => {
  return (
    <article className="flex border-b p-3 md:hidden">
      <div className="flex flex-col justify-center items-center  w-3/6 md:w-1/3 mx-3  ">
        <img alt="" src={URL + item.mainImage} style={{ height: "10rem" }} />
        <div className="flex">
          {item.color.map((c, i) => (
            <div key={i}>
              <span
                style={{ backgroundColor: switchColorFa(c) }}
                className={`rounded-full flex m-1 border  w-3 h-3`}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/6 md:w-2/3 mx-3 flex flex-col justify-start items-center">
        <p className="p-3">
          {window.innerWidth >= 500 ? (
            <span className="text-gray-500 font-bold">{item.name}</span>
          ) : (
            <span className="text-gray-500 font-bold">
              {item.name.slice(0, 60)}...
            </span>
          )}
        </p>
        <div className="w-full text-left p-3 flex items-center justify-between ">
          <p className="text-gray-400 ">موجود در انبار</p>
          <span className="flex items-center">
            {item.rate}
            <BiStar className=" text-yellow-500" />
          </span>
        </div>
        <span className="w-full text-left p-3  md:text-base">
          {replacePrice(item.price)} تومان
        </span>
      </div>
    </article>
  );
};

export default LaptopCart;
