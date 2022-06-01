import React from "react";

import style from "./midd_banner.module.css";

const MiddBanners = () => {
  return (
    <section className="w-full">
      <div className=" p-3 border-b-2 border-rose-800 rounded-t-lg mx-2">
        <h2 className="text-2xl text-gray-500  p-3">بنر میانی</h2>
      </div>
      <div className="mt-2">
        <img
          src={process.env.PUBLIC_URL + "/images/banners/two.jpg"}
          alt="mid-banner"
        />
      </div>
      <form className="mt-3">
        <label htmlFor="midd_banner" className={style.middBannerForm}>
          تغییر بنر
        </label>
        <input
          id="midd_banner"
          type="file"
          accept=".jpg , .jpeg , .png"
          style={{ visibility: "hidden" }}
        />
      </form>
    </section>
  );
};

export default MiddBanners;
