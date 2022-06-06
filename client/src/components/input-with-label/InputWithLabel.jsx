import React from "react";

import style from "./input.module.css";

const InputWithLabel = ({
  label,
  from,
  id,
  name,
  type,
  placeholder,
  accept,
  register,
}) => {
  return (
    <>
      <label htmlFor={from} className="m-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        accept={accept && accept}
        className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 ${style.uploadBTN}`}
        multiple
        register
      />
    </>
  );
};

export default InputWithLabel;
