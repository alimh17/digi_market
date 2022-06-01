import React from "react";

const AddProductComponents = () => {
  return (
    <form className="flex flex-col justify-center items-center p-3 md:grid grid-rows-2 grid-cols-2 gap-3 lg:grid-row-3 lg:grid-cols-3">
      <div className="m-3 w-full ">
        <label htmlFor="name" className="m-2">
          نام محصول
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="iphon 13 max pro"
          className="p-4 mt-2 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full"
        />
      </div>
      <div className="m-3 w-full">
        <label htmlFor="price" className="m-2">
          قیمت
        </label>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="65000000 تومان"
          className="mt-2 p-4 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full"
        />
      </div>
      <div className="m-3 w-full">
        <label htmlFor="brand" className="m-2">
          برند
        </label>
        <select
          id="brand"
          name="brand"
          placeholder="برند"
          className="mt-3 p-4 border-2 outline-0
          rounded-lg focus:border-indigo-800 w-full px-3 "
        >
          <option value={0}>برند</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <div className="m-3 w-full">
        <label htmlFor="color" className="m-2">
          رنگ
        </label>
        <select
          id="color"
          name="color"
          placeholder="رنگ"
          className="mt-3 p-4 border-2 outline-0
         rounded-lg focus:border-indigo-800 w-full px-3"
        >
          <option value="مشکی">رنگ</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div className="m-3 w-full">
        <label htmlFor="image" className="m-2">
          تصویر محصول
        </label>
        <input
          id="image"
          name="image"
          placeholder="تصویر"
          type="file"
          accept=".jpg , .jpeg , .png"
          className="mt-3 p-4 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full product_image"
          multiple
        />
      </div>
      <textarea
        type="text"
        cols={6}
        rows={8}
        placeholder="ویژگی ها"
        className="m-3 p-4 border-2 outline-0 rounded-lg focus:border-indigo-800 w-full resize-none col-span-full"
      />
    </form>
  );
};

export default AddProductComponents;
