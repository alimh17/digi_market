import React from "react";
import { Link } from "react-router-dom";

const MobileNavigation = ({ item }) => {
  return (
    <span className="flex m-4 font-sans">
      <Link className="mx-2  text-gray-700 text-xs" to="/">
        دیجی مارکت
      </Link>
      /
      <Link className="mx-2  text-gray-700 text-xs" to="/mobiles">
        موبایل
      </Link>
      /
      <Link className="mx-2  text-gray-700 text-xs" to={`/mobiles/${item.id}`}>
        گوشی موبایل
      </Link>
    </span>
  );
};

export default MobileNavigation;
