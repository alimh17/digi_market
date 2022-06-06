import React from "react";
import Button from "../../../../../components/button/Button";
import InputWithLabel from "../../../../../components/input-with-label/InputWithLabel";

const AddProductComponents = () => {
  return (
    <form className="flex flex-col justify-center items-center p-3 md:grid grid-rows-2 grid-cols-2 gap-3 lg:grid-row-3 lg:grid-cols-3">
      <div className="m-3 w-full ">
        <InputWithLabel
          label="نام محصول"
          from="name"
          id="name"
          name="name"
          type="text"
          placeholder="iphon 13 max pro"
        />
      </div>
      <div className="m-3 w-full">
        <InputWithLabel
          label="قیمت"
          from="price"
          id="price"
          name="price"
          type="text"
          placeholder="65000000 تومان"
        />
      </div>
      <div className=" w-full">
        <label htmlFor="brand" className="m-2"></label>
        <select
          id="brand"
          placeholder="برند"
          name="brand"
          className="p-4 mt-8 border outline-0
          rounded-lg focus:border-indigo-800 w-full border-gray-400"
        >
          <option value={0}>برند</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <div className="w-full">
        <label htmlFor="color" className="m-2">
          رنگ
        </label>
        <select
          id="color"
          name="color"
          placeholder="رنگ"
          className="mt-3 p-5 border outline-0
         rounded-lg focus:border-indigo-800 w-full px-3 border-gray-400"
        >
          <option value="مشکی">رنگ</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className="m-3 w-full">
        <InputWithLabel
          label="تصویر محصول"
          from="image"
          id="image"
          name="image"
          placeholder="تصویر"
          type="file"
          accept=".jpg , .jpeg , .png"
        />
      </div>
      <textarea
        type="text"
        cols={6}
        rows={8}
        placeholder="ویژگی ها"
        className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800 w-full resize-none col-span-full border-gray-400"
      />
      <Button title="ثبت محصول" primary={true} type="submit" />
    </form>
  );
};

export default AddProductComponents;
