import React from "react";
import LaptopForm from "./LaptopForm";
import MobileForm from "./MobileForm";

const AddProductComponent = ({ product }) => {
  return (
    <>
      {product[0] && <MobileForm />}
      {product[1] && <LaptopForm />}
    </>
  );
};

export default AddProductComponent;