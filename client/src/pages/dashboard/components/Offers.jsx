import React from "react";

const Offers = React.memo(({ active }) => {
  return <div className={`${active[2] ? "flex " : "hidden"}`}>Offers</div>;
});

export default Offers;
