import React, { useRef, useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";
import { replacePrice } from "../../../../../utils/replacePrice";

const RangePrice = () => {
  const [show, setShow] = useState(false);
  const [InValue, setInValue] = useState("");

  const InRef = useRef(null);

  const handleValidationInPrice = (e) => {
    const reg = new RegExp("^[0-9,]*$");

    if (e.target.value.match(reg) && e.target.value !== ",") {
      const In = e.target.value
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      // console.log(val);
      // setInValue(val);
      console.log(In);
    }
  };


  return (
    <section className="flex flex-col  py-5 border-b">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h2 className="mx-5 text-xl">محدوده قیمت</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all ease-in duration-150 ${
            show && "rotate-180"
          }`}
        />
      </div>
      <article
        className={`flex flex-col ${
          !show && "hidden"
        } justify-center items-center`}
      >
        <div className="flex w-full justify-center items-center my-2">
          <span className=" mx-2 text-center text-gray-500">از</span>
          <input
            type="text"
            placeholder="0"
            ref={InRef}
            value={InValue}
            maxLength={12}
            className="border outline-none mx-2 p-3 rounded-lg bg-gray-200 text-2xl text-gray-600 "
            onChange={(e) => handleValidationInPrice(e)}
            // onKeyPress={(e) => setInValue(replacePrice(InValue))}
          />

          <span className=" mx-2 text-center text-gray-500">تومان</span>
        </div>
        {/* <div className="flex w-full justify-center items-center my-2">
          <span className=" mx-2 text-center text-gray-500">تا</span>
          <input
            type="text"
            onChange={(e) => replacePrice(e.target.value)}
            defaultValue={replacePrice(35000000)}
            className="border outline-none mx-2 p-3 rounded-lg bg-gray-200 "
          />
          <span className=" mx-2 text-center text-gray-500">تومان</span>
        </div> */}
      </article>
    </section>
  );
};

export default RangePrice;
