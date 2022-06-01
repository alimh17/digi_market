import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

import { BiStar } from "react-icons/bi";
import { brands } from "../../../../data/brands";

const Brands = () => {
  return (
    <div className="mx-5 flex flex-col my-10 ">
      <div className="flex justify-center md:justify-start">
        <h1 className="text-2xl mx-3">محبوب ترین برند ها</h1>
        <BiStar className="text-yellow-400 text-2xl" />
      </div>
      <div className="border rounded-md">
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            height: "20rem",
            gap: 3,
            direction: "rtl",
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
        >
          {brands.map((item) => (
            <SplideSlide
              className="border flex items-center justify-center "
              key={item.id}
            >
              <Link to={`/brands/${item.name}`}>
                <img
                  alt=""
                  src={item.url}
                  style={{ width: "80%", height: "50%" }}
                  data-splide-lazy={item.url}
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Brands;
