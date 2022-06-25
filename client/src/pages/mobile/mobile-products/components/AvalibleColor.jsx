import React from "react";
import { switchColorFa } from "../../../../utils/switchColor";

const AvalibleColor = ({ item }) => {
  return (
    <div className="flex md:flex-col relative  md:top-0  w-full items-end">
      {item.color.map((c, i) => (
        <div key={i}>
          <span
            style={{
              backgroundColor: `${switchColorFa(c)}`,
              width: ".6rem",
              height: ".6rem",
              display: "block",
              marginTop: ".3rem",
            }}
            className={`rounded-full flex flex-col border `}
          ></span>
        </div>
      ))}
    </div>
  );
};

export default AvalibleColor;
