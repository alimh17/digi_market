import React, { useRef, useState } from "react";
import { SliderData } from "../../../../../data/slider";
import { FaPlus, FaMinus, FaTimesCircle } from "react-icons/fa";

const FirstBanners = () => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [selectedBannersForDel, setSelectedBannersForDel] = useState({});

  const IconRef = useRef([]);
  const ImgRef = useRef([]);

  IconRef.current = SliderData.map((_, i) => {
    return IconRef.current[i] ?? React.createRef();
  });
  ImgRef.current = SliderData.map((_, i) => {
    return ImgRef.current[i] ?? React.createRef();
  });

  const handleAddStyle = (e, i, item) => {
    if (IconRef.current[i].current.classList.contains("text-gray-400")) {
      IconRef.current[i].current.classList.replace(
        "text-gray-400",
        "text-rose-800"
      );
      ImgRef.current[i].current.classList.replace("opacity-100", "opacity-40");
      let selected = [];
      selectedBannersForDel.selected
        ? (selected = [...selectedBannersForDel.selected])
        : (selected = []);
      selected.push(item);
      setSelectedBannersForDel({ selected });
    } else {
      IconRef.current[i].current.classList.replace(
        "text-rose-800",
        "text-gray-400"
      );
      ImgRef.current[i].current.classList.replace("opacity-40", "opacity-100");

      const filter = selectedBannersForDel.selected.filter(
        (f) => f.url !== item.url
      );
      setSelectedBannersForDel({ selected: filter });
    }
  };

  return (
    <section className="w-full">
      <div className=" p-3 border-b-2 border-rose-800 rounded-t-lg mx-2">
        <h2 className="text-2xl text-gray-500  p-3">بنر ابتدایی</h2>
      </div>
      <div className="grid md:grid-rows-2 md:grid-cols-2 gap-3 m-2">
        {SliderData.map((item, index) => (
          <div key={index} className="transition-all ease duration-200">
            <div className="w-full rounded-lg  flex flex-col justify-center items-center ">
              <span
                ref={IconRef.current[index]}
                className={`${
                  showDeleteIcon ? "block" : "hidden"
                }  relative top-20 text-6xl text-gray-400 transition-all ease-in duration-200 z-10`}
                onClick={(e) => handleAddStyle(e, index, item)}
              >
                <FaTimesCircle className="" />
              </span>
              <img
                alt=""
                ref={ImgRef.current[index]}
                src={process.env.PUBLIC_URL + item.url}
                className="rounded-lg transition-all ease duration-200 opacity-100"
              />
            </div>
          </div>
        ))}
        <div className="flex col-span-full gap-3">
          <div className="w-full bg-gray-300 h-44 md:h-58 flex justify-center items-center rounded-lg hover:bg-gray-400">
            <FaPlus className="text-5xl text-indigo-800" />
          </div>
          <div className="w-full bg-gray-300 h-44 md:h-58 flex justify-center items-center hover:bg-gray-400 rounded-lg">
            <FaMinus
              className="text-5xl text-rose-800"
              onClick={() => {
                setShowDeleteIcon(!showDeleteIcon);
                !showDeleteIcon && setSelectedBannersForDel({});
                ImgRef.current.map((select) =>
                  select.current.classList.replace("opacity-40", "opacity-100")
                );
              }}
            />
          </div>
        </div>
        {showDeleteIcon && (
          <div>
            <button className="bg-indigo-600 p-3 text-white rounded-lg hover:bg-indigo-800">
              ثبت تغییرات
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstBanners;
