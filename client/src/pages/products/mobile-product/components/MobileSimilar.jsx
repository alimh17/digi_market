import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { mobile } from "../../../../data/mobile";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoadingAction } from "../../../../actions/loadingAction";

const MobileSimilar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="font-sans">
      <h2 className="m-3 font-bold border-b border-red-500 text-sm inline-block py-2">
        کالاهای مشابه
      </h2>
      <Splide
        options={{
          perMove: 1,
          perPage: 4,
          gap: 5,
          autoplay: true,
          direction: "rtl",
          type: "loop",
          breakpoints: {
            1000: {
              perPage: 3,
            },

            820: {
              perPage: 2,
            },

            420: {
              perPage: 1,
              arrows: false,
            },
          },
        }}
      >
        {mobile.map((item) => (
          <SplideSlide
            key={item.id}
            className="flex justify-center items-center flex-col  rounded-lg h-96 "
            onClick={() => {
              dispatch(showLoadingAction());
              setTimeout(() => {
                navigate(`/mobiles/${item.id}`);
              }, 1800);
            }}
          >
            <img alt="" src={item.url} className="w-2/3 h-2/4" />
            <p className="text-sm p-2 leading-normal  font-sans  text-gray-400">
              {item.title}
            </p>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default MobileSimilar;
