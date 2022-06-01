import React from "react";

const Application = ({ style }) => {
  return (
    <div className={`${style.application} h-36 md:h-80 m-5 rounded-lg`}>
      <h2 className="text-white p-3 border-b-2 md:text-3xl">دانلود اپلیکیشن</h2>
      <div
        className={` rounded-lg grid grid-rows-2 grid-cols-2 gap-2 md:w-5/6  md:h-5/6`}
      >
        <div className="text-white flex justify-center items-center md:text-2xl ">
          دریافت از بازار
        </div>
        <div className="text-white flex justify-center items-center md:text-2xl ">
          دریافت از استور
        </div>
        <div className="text-white flex justify-center items-center md:text-2xl ">
          دانلود مستقیم
        </div>
      </div>
    </div>
  );
};

export default Application;
