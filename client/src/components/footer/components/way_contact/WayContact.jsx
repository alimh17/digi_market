import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const WayContact = () => {
  return (
    <section className="w-full h-20 md:order-3 md:h-full ">
      <div className="container flex md:flex-col md:items-center  justify-around">
        <div className="flex  justify-center items-center w-1/2 text-sm md:text-xl md:p-10">
          <AiFillPhone className="text-lg text-gray-500 md:text-3xl md:mx-3" />
          <span className="flex flex-col ">
            <p>010-111111</p>
            <p>020-222222</p>
          </span>
        </div>
        <div className="flex justify-center items-center w-1/2 text-xs md:text-xl">
          <MdOutlineMailOutline className="text-lg text-gray-500 md:mx-3 md:text-3xl" />
          <p>amohamadi17@gamil.com</p>
        </div>
      </div>
      <p className="text-sm text-center text-gray-500 mt-3 md:text-xl md:p-5">
        ساعت پاسخگویی : شنبه تا چهارشنبه8:30 الی 21 - پنجشنبه 9 الی 21
      </p>
    </section>
  );
};

export default WayContact;
