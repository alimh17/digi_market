import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Simcard = () => {

  const [showSimcard, setShowSimcard] = useState(false);

  return (
    <section className="flex justify-between py-5 border-b">
      <h2 className="mx-5 text-xl">تعداد سیم کارت</h2>
      {!showSimcard ? (
        <BsChevronUp className="mx-5 text-xl text-gray-400" />
      ) : (
        <BsChevronDown className="mx-5 text-xl" />
      )}
    </section>
  );
};

export default Simcard;
