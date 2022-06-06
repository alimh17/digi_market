import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Button from "../../../../../../components/button/Button";
import config from "../../../../../../config/config.json";

import style from "./form.module.css";

const Form = ({ show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("banner", data.banner[0]);

    const response = await axios.post(
      `http://localhost:3001/api/v1/banner`,
      formData
    );
  };

  return (
    <div className="flex flex-col w-3/4 text-center justify-evenly h-full">
      <h2 className="text-2xl font-bold">انتخاب بنر ابتدایی</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="name" className="m-2 text-right">
          نام بنر
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="نام بنر"
          {...register("name", { required: true, minLength: 3 })}
          className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 `}
        />
        {errors.name && (
          <p className="text-rose-500 text-right">
            * نام بنر نباید کمتری از 3 کاراکتر باشد
          </p>
        )}
        <label htmlFor="banner" className="m-2 text-right">
          تصویر بنر
        </label>
        <input
          id="banner"
          name="banner"
          type="file"
          placeholder="نام بنر"
          accept=".jpg , .jpeg , .png"
          className={`p-4 mt-3 border outline-0 rounded-lg focus:border-indigo-800 w-full border-gray-400 ${style.uploadBanner}`}
          {...register("banner", { required: true })}
        />
        {errors.banner && (
          <p className="text-rose-500 text-right">* لطفا یک تصویر اضافه کنید</p>
        )}

        <div className="flex">
          <Button
            title="تایید"
            type="submit"
            width={true}
            primary={true}
            click={(e) => {}}
          />
          <Button
            title="انصراف"
            click={() => show(false)}
            width={true}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
