import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaHotjar } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { bestSellingProduct } from "../../../../data/best-selling-products";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";

import "./best-selling-product.css";

const BestSellingProduct = () => {
  const [collectionProduct, setCollectionProduct] = useState([]);

  useEffect(() => {
    setCollectionProduct(_.chunk(bestSellingProduct, 3));
  }, []);

  return (
    <section
      id="BestSellingProduct"
      className="flex flex-col mt-6 w-full  px-5"
    >
      <div className="border border-gray-400   rounded-lg">
        <div className="w-full flex justify-right md:justify-center items-center my-3">
          <FaHotjar className="text-orange-500 mx-3 text-xl md:text-3xl " />
          <h1 className="text-sm md:text-xl">پرفروش ترین کالاها</h1>
          <Link
            to="best-selling"
            className="absolute left-5 md:left-8 text-sm md:text-base flex justify-center items-center text-sky-400"
          >
            مشاهده همه
            <RiArrowLeftSLine />
          </Link>
        </div>

        <Splide
          className=""
          options={{
            height: "30rem",
            direction: "rtl",
            perPage: 3,
            perMove: 1,
            gap: 3,

            breakpoints: {
              768: {
                perPage: 1,
              },
              1200: {
                perPage: 2,
              },
            },
          }}
        >
          {collectionProduct.map((item, index) => (
            <SplideSlide key={index} className="">
              {item.map((p) => (
                <Link to={`best-selling-product/${p.id}`} key={p.id}>
                  <div className="flex justify-between my-2 items-center w-full">
                    <div className="flex justify-between items-center cursor-pointer  w-full">
                      <img
                        alt=""
                        src={p.url}
                        style={{ width: "8rem", height: "8rem" }}
                      />
                      <div
                        className="flex justify-start items-center border-b  w-full"
                        style={{ height: "8rem" }}
                      >
                        <p className="hidden md:flex mx-5 text-3xl text-sky-400 font-semibold">
                          {replaceNumberToPersian(p.id)}
                        </p>
                        <p className="mx-3 text-sm  md:text-base title">
                          {p.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default BestSellingProduct;
