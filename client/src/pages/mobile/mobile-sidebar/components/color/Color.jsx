import React, { createRef, useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import { colorList } from "../../../../../utils/colorLists";
import { switchColor } from "../../../../../utils/switchColor";
import { changeCheckbox, colorSort } from "./utils/checkboxAndSort";

import style from "./color.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortMobilesByColor } from "../../../../../actions/mobilesActions";

const Color = () => {
  const [showColor, setShowColor] = useState(false);

  const colorRef = useRef([]);
  const dispatch = useDispatch();

  const colorMobiles = useSelector((state) => state.mobiles);
  const { colors } = colorMobiles;

  colorRef.current = colorList.map(
    (_, i) => colorRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getColors = colorSort(colors, item);
    dispatch(sortMobilesByColor(getColors));

    changeCheckbox(colorRef, item);
  };

  useEffect(() => {
    colors.forEach((color) => {
      if (colorRef) {
        colorRef.current.forEach((el, i) => {
          if (el.current.classList.contains(color)) {
            el.current.checked
              ? (el.current.checked = false)
              : (el.current.checked = true);
          }
        });
      }
    });
  }, []);

  return (
    <section className="flex flex-col py-5 border-b">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setShowColor(!showColor)}
      >
        <h2 className="mx-5 text-xl">رنگ</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all duration-150 ease-in text-gray-400 ${
            showColor && "rotate-180"
          }`}
        />
      </div>
      <article className={`${showColor ? "flex" : "hidden"} flex-col `}>
        <div
          className={`w-full flex flex-col justify-center items-center relative`}
        >
          <input
            placeholder="جستجو..."
            className="border-2 w-3/4 rounded-md p-3 m-3  outline-none pr-14 "
          />
          <FaSearch className="absolute right-14 lg:right-16 xl:right-20 2xl:right-24 text-2xl text-gray-300" />
        </div>
        <div>
          <ul>
            {colorList.map((c, i) => (
              <li
                key={i}
                className="p-2 m-3 flex justify-between cursor-pointer"
                onClick={(e) => handleCheckbox(e, c)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`mx-3 ${c} ${style.colorCheckbox}`}
                    ref={colorRef.current[i]}
                    onClick={(e) =>
                      e.target.checked
                        ? (e.target.checked = false)
                        : (e.target.checked = true)
                    }
                  />
                  <TiTick className={` ${style.tick} text-4xl`} />
                  <span className={`${style.replace}`}></span>

                  <p className="font-bold text-xl text-gray-400">
                    {switchColor(c)}
                  </p>
                </div>
                <span
                  style={{ backgroundColor: c }}
                  className="w-5 h-5 border-2 rounded-full"
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Color;
