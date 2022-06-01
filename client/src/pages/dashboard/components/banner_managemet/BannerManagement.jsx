import React from "react";
import FirstBanners from "./components/FirstBanners";
import MiddBanners from "./components/MiddBanners";

const BannerManagement = React.memo(({ active }) => {
  return (
    <div className={`${active[1] ? "flex" : "hidden"} flex-col`}>
      <FirstBanners />
      <MiddBanners />
    </div>
  );
});

export default BannerManagement;
