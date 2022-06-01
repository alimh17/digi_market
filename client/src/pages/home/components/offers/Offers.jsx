import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { offersProduct } from "../../../../data/offers-products";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaArrowCircleLeft } from "react-icons/fa";
import { replacePrice } from "../../../../utils/replacePrice";

import "./Offers.css";

const Offers = () => {
  return (
    <Splide
      className="bg-violet-800 my-5 mx-5 rounded-lg"
      options={{
        rewind: true,
        perPage: 5,
        perMove: 1,
        height: "25rem",
        direction: "rtl",
        width: "100%",
        gap: 3,
        breakpoints: {
          1204: {
            perPage: 3,
            arrows: false,
          },
          768: {
            perPage: 2,
            arrows: false,
          },

          450: {
            perPage: 1,
            arrows: false,
          },
        },
      }}
    >
      <SplideSlide className="cursor-pointer font-sans">
        <div className="flex flex-col justify-center items-center h-full">
          <img
            alt=""
            width="80%"
            src={process.env.PUBLIC_URL + "/images/offers/Electronics.png"}
          />
          <span className="flex text-white items-center">
            مشاهده همه
            <RiArrowLeftSLine className="mx-2" />
          </span>
        </div>
      </SplideSlide>
      {offersProduct.map((item) => (
        <SplideSlide
          key={item.id}
          className="flex justify-center items-center  w-1/2 cursor-pointer font-sans"
        >
          <div
            style={{ height: "80%" }}
            className="flex flex-col justify-center items-center w/50  mx-0.5 bg-white rounded-lg "
          >
            <img
              src={item.url}
              alt=""
              data-splide-lazy={item.url}
              style={{ width: "80%" }}
            />
            <div className="flex justify-around w-full items-center my-2 ">
              <span className="bg-red-600 rounded-full p-1 flex justify-center items-center text-white text-base md:text-xl">
                {item.off}
              </span>
              <p className="now-price text-base ">
                {replacePrice(item.nowPrice)}{" "}
                <span className="mx-2 text-base ">تومان</span>
              </p>
            </div>
            <span className="text-left w-full ml-28 line-through text-gray-400 before-price text-base">
              {replacePrice(item.beforePrice)}
            </span>
          </div>
        </SplideSlide>
      ))}
      <SplideSlide className="cursor-pointer flex justify-center items-center font-sans ">
        <div
          style={{ width: "100%", height: "80%" }}
          className="flex flex-col justify-center items-center w/50  mx-0.5 bg-white rounded-lg"
        >
          <span className="flex text-white items-center my-3">
            <FaArrowCircleLeft className="mx-2 text-violet-800 text-6xl" />
          </span>
          <h2>مشاهده همه</h2>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Offers;
