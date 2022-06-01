import React from "react";

const CenterBanner = () => {
  return (
    <section className="flex h-44 md:h-72 justify-center mt-5 w-full">
      <div className="h-full w-full">
        <img
          src={process.env.PUBLIC_URL + "/images/banners/two.jpg"}
          className="h-full rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default CenterBanner;
