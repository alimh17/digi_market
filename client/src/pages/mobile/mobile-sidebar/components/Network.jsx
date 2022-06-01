import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Network = () => {
  const [showNetwork, setShowNetwork] = useState(false);

  return (
    <section className="flex justify-between py-5 border-b">
      <h2 className="mx-5 text-xl">شبکه های ارتباطی</h2>
      {!showNetwork ? (
        <BsChevronUp className="mx-5 text-xl" />
      ) : (
        <BsChevronDown className="mx-5 text-xl" />
      )}
    </section>
  );
};

export default Network;
