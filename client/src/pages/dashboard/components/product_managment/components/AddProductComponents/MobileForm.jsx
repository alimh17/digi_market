import React from "react";
import _ from "lodash";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";

import InputWithLabel from "../../../../../../components/input-with-label/InputWithLabel";
import { brands } from "../../../../../../utils/brnadConverToPersian";
import { colorListFa } from "../../../../../../utils/colorLists";
import { mobileSchema } from "../../../../../../utils/validation";
import { showMobileFormAlert } from "../../../../../../utils/showFormAlert";

import style from "./addProductComponent.module.css";

const MobileForm = () => {
  const { addToast } = useToasts();

  const handleDisplayAlert = (err) => {
    if (!_.isEmpty(err)) {
      const alert = showMobileFormAlert(err);
      addToast(alert, {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={mobileSchema}
      onSubmit={(value) => {
        console.log(value);
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-3 md:grid grid-rows-2 grid-cols-2 gap-3 lg:grid-row-3 lg:grid-cols-3 overflow-x-hidden"
        >
          <InputWithLabel
            label="نام موبایل"
            from="name"
            type="text"
            id="name"
            name="name"
            placeholder="iphon 13 max pro"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name ? values.name : ""}
          />
          <InputWithLabel
            label="قیمت"
            from="price"
            type="text"
            id="price"
            name="price"
            placeholder="24,499,000"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price ? values.price : ""}
          />
          <InputWithLabel
            label="اندازه صفحه"
            from="screen"
            type="text"
            id="screen"
            name="screen"
            placeholder="6.0 اینچ و بزرگتر"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.screen ? values.price : ""}
          />
          <div className=" w-full">
            <label htmlFor="brand" className="">
              برند
            </label>
            <select
              id="brand"
              placeholder="برند"
              name="brand"
              className="p-4 mt-8 border outline-0
          rounded-lg focus:border-indigo-800 w-full border-gray-400"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brand ? values.brand : ""}
            >
              <option value="">--برند محصول را انتخاب کنید--</option>
              {brands.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <InputWithLabel
            label="تصویر محصول"
            from="image"
            id="image"
            name="image"
            placeholder="تصویر"
            type="file"
            accept=".jpg , .jpeg , .png"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image ? values.image : null}
          />
          <InputWithLabel
            label="شبکه"
            from="network"
            id="network"
            name="network"
            placeholder="2G , 3G , 4G , 5G"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.network ? values.network : ""}
          />
          <InputWithLabel
            label="رم"
            from="Ram"
            id="Ram"
            name="Ram"
            placeholder="128 گیگابایت"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Ram ? values.Ram : ""}
          />

          <InputWithLabel
            label="ابعاد"
            from="Dimensions"
            id="Dimensions"
            name="Dimensions"
            placeholder="۱۴۶.۷x۷۱.۵x۷.۶۵"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Dimensions ? values.Dimensions : ""}
          />
          <InputWithLabel
            label="وزن"
            from="Whigth"
            id="Whigth"
            name="Whigth"
            placeholder="۱۷۴  گرم"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Whigth ? values.Whigth : ""}
          />
          <InputWithLabel
            label="سیم کارت"
            from="Simcart"
            id="Simcart"
            name="Simcart"
            placeholder="سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Simcart ? values.Simcart : ""}
          />
          <div className="m-3 w-full">
            <label htmlFor="color" className="m-2">
              رنگ
            </label>
            <select
              id="color"
              name="color"
              placeholder="رنگ"
              className={`mt-3 p-5 border outline-0
          rounded-lg focus:border-indigo-800 w-full px-3 border-gray-400 ${style.scrollbar}`}
              multiple
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color ? values.color : []}
            >
              <option value="مشکی">--رنگ محصول را انتخاب کنید--</option>
              {colorListFa.map((color, i) => (
                <option key={i} className="p-2" style={{ color: color }}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-full w-full ">
            <label htmlFor="body" className="">
              بدنه
            </label>
            <textarea
              name="body"
              id="body"
              type="text"
              rows={8}
              placeholder="قاب جلویی و پشتی از جنس شیشه فریم از جنس آلومینیومی صفحه‌نمایش با شیشه مقاوم در برابر خط‌وخش با پوشش Gorilla Glass سرامیکی دارای استاندارد IP۶۸ (مقاومت در برابر نفوذ آب، گِل، گرد و خاک) دارای مقاومت تا ۳۰ دقیقه در آب تا عمق ۶ متر"
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800  resize-none border-gray-400 w-full"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body ? values.body : ""}
            />
          </div>
          <div className="col-span-full w-full">
            <label htmlFor="SpecialFeatures" className="">
              ویژگی های خاص
            </label>
            <textarea
              name="SpecialFeatures"
              id="SpecialFeatures"
              type="text"
              cols={6}
              rows={8}
              placeholder="دارای بدنه مقاوم,
          طراحی مناسب بانوان,
          مجهز به حس‌گر تشخیص چهره,
          مقاوم در برابر آب,
          مناسب بازی,
          مناسب عکاسی,
          مناسب عکاسی سلفی"
              className="m-3 p-4 border outline-0 rounded-lg focus:border-indigo-800 w-full resize-none border-gray-400"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.SpecialFeatures ? values.SpecialFeatures : ""}
            />
          </div>
          <input
            onClick={() => handleDisplayAlert(errors)}
            type="submit"
            value="ثبت محصول"
            className="bg-indigo-800 text-white hover:bg-indigo-500
       p-3 m-3 rounded-lg transition-all ease-in duration-150 text-xl cursor-pointe"
          />
        </form>
      )}
    </Formik>
  );
};

export default MobileForm;
