import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Ram = () => {
  const [showRam, setShowRam] = useState(false);

  return (
    <section className="flex justify-between py-5 border-b">
      <h2 className="mx-5 text-xl">مقدار RAM</h2>
      {!showRam ? (
        <BsChevronUp className="mx-5 text-xl" />
      ) : (
        <BsChevronDown className="mx-5 text-xl" />
      )}
    </section>
  );
};

export default Ram;
