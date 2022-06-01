import React from "react";

const MobileSpecifications = ({ item }) => {
  return (
    <div className="">
      <h2 className=" p-3 border-b-2 border-b-rose-600 inline-block font-sans  text-xl">
        مشخصات
      </h2>
      <div className="flex">
        <h3 className="m-3 text-base md:w-1/4 hidden md:flex font-sans">
          مشخصات
        </h3>
        <ul className=" md:w-1/4 w-full flex flex-col">
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans">ابعاد :</span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {" "}
              {item.Specifications.Dimensions}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans">وزن :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.Specifications.Whigth}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans ">توضیحات سیم کارت: </span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {item.Specifications.Simcart}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b">
            <span className="text-gray-500 font-sans">ساختار بدنه :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.Specifications.Body}
            </span>
          </li>
          <li className="m-3 flex   flex-col">
            <span className="text-gray-500 font-sans">ویژگی های خاص :</span>
            {item.Specifications.SpecialFeatures.map((item, index) => (
              <li key={index} className="py-2 font-sans text-gray-400">
                {item}
              </li>
            ))}
          </li>
        </ul>
        {/* <ul className="md:w-2/4  w-full">
          <li className="border-b  flex m-3 ">
            <ul className="flex flex-col items-start ">
              {item.Specifications.SpecialFeatures.map((item, index) => (
                <li key={index} className="my-2">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default MobileSpecifications;
