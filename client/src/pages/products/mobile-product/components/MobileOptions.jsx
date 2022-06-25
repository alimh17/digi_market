import React from "react";

const MobileOptions = ({ item }) => {
  return (
    <div className="border-b pb-3">
      <h3 className="m-3 text-xl font-sans text-gray-500">ویژگی ها</h3>
      <ul className="mx-3 options">
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">حافظه داخلی</span> :
          <p className="text-sm">{item.ram}</p>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">
            بازه اندازه صفحه نمایش
          </span>{" "}
          : <p className="text-sm">{item.screen}</p>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">شبکه های ارتباطی</span> :
          <p className="text-sm">{item.network}</p>
        </li>
      </ul>
    </div>
  );
};

export default MobileOptions;
