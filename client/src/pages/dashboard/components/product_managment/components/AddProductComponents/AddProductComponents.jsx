import React from "react";
import LaptopForm from "./LaptopForm";
import MobileForm from "./MobileForm";
import TabletForm from "./TabletForm";

const AddProductComponent = ({ product, setPorduct }) => {
  return (
    <>
      {product[0] && <MobileForm />}
      {product[1] && <LaptopForm />}
      {product[2] && <TabletForm />}
    </>
  );
};

export default AddProductComponent;
