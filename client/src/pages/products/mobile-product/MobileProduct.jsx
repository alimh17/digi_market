import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toNumber } from "lodash";

import { mobile } from "../../../data/mobile";

import { colorList, colorObject } from "../../../utils/colorLists";
import { switchColor } from "../../../utils/switchColor";

import "./mobile-product.css";
import MobileDevice from "./components/MobileDevice";
import { BiInfoCircle, BiLike, BiStar } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import {
  replaceNumberToPersian,
  replacePrice,
} from "../../../utils/replacePrice";
import { generateRandomNumber } from "../../../utils/generateRandomNumber";

import MobileColors from "./components/MobileColors";
import MobileColor from "./components/MobileColor";
import MobileOptions from "./components/MobileOptions";
import MobileSimilar from "./components/MobileSimilar";
import { AiOutlineSafety, AiOutlineShop } from "react-icons/ai";
// import CartButton from "./components/CartButton";
import InnerImageZoom from "react-inner-image-zoom";

const MobileProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState();
  const [color, setColor] = useState("مشکی");

  const [feedback, setFeedback] = useState(Number);

  useEffect(() => {
    setFeedback(replaceNumberToPersian(generateRandomNumber()));
  }, []);

  let productColor = [];

  useEffect(() => {
    const newproduct = mobile.filter((p) => p.id === toNumber(params.id));
    setProduct(newproduct);
    newproduct.map((item) => {
      return setColors(item.color);
    });
  }, [params]);

  if (colors) {
    colors.map((c) => {
      const value = Object.entries(colorObject).forEach((key) => {
        if (key[0] === c) {
          const obj = { c: key[1] };
          productColor.push(obj);
          return obj;
        }
      });
      return value;
    });
  }

  const handleColorState = (e) => {
    const selectedColor = colorList.filter(
      (c) => c === e.target.style.backgroundColor
    );

    const value = switchColor(selectedColor[0]);
    setColor(value);
  };

  return (
    <section className="mobile-product">
      <div className="font-sans">
        {product.map((item) => (
          <div key={item.id} className="my-3">
            <MobileDevice
              item={item}
              colors={colors}
              color={color}
              handle={handleColorState}
              feedback={feedback}
              setFeedback={setFeedback}
            />
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default MobileProduct;
