import React from "react";
import RemoveAndEditLaptops from "./RemoveAndEditLaptops";
import RemoveAndEditMobiles from "./RemoveAndEditMobiles";

const RemoveAndEditPorduct = ({ product }) => {
  console.log(product);
  return (
    <>
      {product[0] && <RemoveAndEditMobiles />}
      {product[1] && <RemoveAndEditLaptops />}
    </>
  );
};

export default RemoveAndEditPorduct;
