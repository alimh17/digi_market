import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Scrollbar,
  EffectFade,
} from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./banner.css";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, Scrollbar, EffectFade]}
      slidesPerView={1}
      autoHeight={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation
      effect="fade"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="swiper"
    >
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/banners/1.jpg"}
          alt="banner_1"
          className="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/banners/2.jpg"}
          alt="banner_2"
          className="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/banners/3.jpg"}
          alt="banner_3"
          className="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/images/banners/4.jpg"}
          alt="banner_4"
          className="swiper-slide"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
