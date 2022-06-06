import "./product_managment.css";

import React, { useEffect, useState } from "react";

import AddProductComponents from "./components/AddProductComponents";
import { SwitchProduct } from "../../utils/SwitchProduct";
import RemovePorduct from "./components/RemovePorduct";

const ProductManagment = React.memo(({ active }) => {
  const [product, setProduct] = useState(new Array(6).fill(false));

  useEffect(() => {
    const copyProducts = [...product];
    copyProducts.fill(false);
    copyProducts[0] = true;
    setProduct(copyProducts);
  }, []);

  const handleChangeProductState = (num) => {
    const copyProducts = [...product];
    copyProducts.fill(false);
    copyProducts[num] = true;
    setProduct(copyProducts);
  };

  return (
    <section className={`${active[0] ? "flex" : "hidden"} flex-col `}>
      <h2 className="text-2xl m-3 border-b-rose-600 border-b-2 p-3  rounded-b-sm font-bold  ">
        دسته بندی
      </h2>
      <div
        className="flex  md:grid   md:grid-rows-2  md:grid-cols-2
      lg:grid-rows-2 lg:grid-cols-2 
      flex-col  product_managment 
      "
      >
        <article
          className={`flex flex-col justify-center items-center  border-2 rounded-lg p-4  m-3 cursor-pointer  ${
            product[0] && " border-indigo-800 shadow-2xl"
          }  `}
          onClick={() => handleChangeProductState(0)}
        >
          <div className="w-full text-right">
            <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
              موبایل
            </p>
          </div>
          <img
            className="w-32 h-42 md:w-48  md:h-52"
            alt="mobiles"
            src="/images/mobile/15d774761e234a15c1c559ac540963baad9e229f_1634390421.jpg"
          />
        </article>
        <article
          className={`flex flex-col justify-center items-center border-2 rounded-lg p-4 m-3 cursor-pointer ${
            product[1] && " border-indigo-800 shadow-2xl"
          } `}
          onClick={() => handleChangeProductState(1)}
        >
          <div className="w-full text-right">
            <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
              لپ تاپ
            </p>
          </div>
          <img
            className="w-32 h-42 md:w-48 md:h-52"
            alt="mobiles"
            src="/images/laptop/msi/GS76 Stealth.jpg"
          />
        </article>
        <article
          className={`flex flex-col justify-center items-center border-2 rounded-lg p-4 m-3 cursor-pointer
        ${product[2] && " border-indigo-800 shadow-2xl"}
         `}
          onClick={() => handleChangeProductState(2)}
        >
          <div className="w-full text-right">
            <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
              تبلت
            </p>
          </div>
          <img
            className="w-48 h-52"
            alt="mobiles"
            src="/images/tablet/fe079b9490f83bcf52cc8036e99c50641bf291a0_1631534772.jpg"
          />
        </article>
        <article
          className={`flex flex-col justify-center items-center border-2 rounded-lg p-4 m-3 cursor-pointer
        ${product[3] && " border-indigo-800 shadow-2xl"}
         `}
          onClick={() => handleChangeProductState(3)}
        >
          <div className="w-full text-right">
            <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
              کنسول
            </p>
          </div>
          <img
            className="w-32 h-42 md:w-48 md:h-52"
            alt="mobiles"
            src="/images/console/sony/PlayStation 5 Drive.jpg"
          />
        </article>
        <article
          className={`flex flex-col justify-center items-center border-2 rounded-lg p-4 m-3 cursor-pointer
        ${product[4] && " border-indigo-800 shadow-2xl"}
        
         `}
          onClick={() => handleChangeProductState(4)}
        >
          <div className="w-full text-right">
            <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
              ساعت هوشمند
            </p>
          </div>
          <img
            className="w-32 h-42 md:w-48 md:h-52"
            alt="mobiles"
            src="/images/smart_watch/apple/44mm Space Gray Aluminum Case with Nike Sport.jpg"
          />
        </article>
        <article
          className={`flex flex-col justify-center items-center border-2 rounded-lg p-4 m-3 cursor-pointer
        ${product[5] && " border-indigo-800 shadow-2xl"}
         `}
          onClick={() => handleChangeProductState(5)}
        >
          <div className="w-full text-right">
            <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
              لوازم جانبی
            </p>
          </div>
          <img
            className="w-32 h-42 md:w-48 md:h-52"
            alt="mobiles"
            src="/images/extra_tools/tesco/TSCO TM 764 GA.jpg"
          />
        </article>
        <div className="p-2 col-span-full ">
          <h2 className="text-2xl font-bold border-b-2 border-b-rose-600 rounded-b-sm p-3 mx-4">
            افزودن {SwitchProduct(product)} جدید
          </h2>
          <AddProductComponents />
        </div>
        <div className="p-2 col-span-full ">
          <h2 className="text-2xl font-bold border-b-2 border-b-rose-600 rounded-b-sm p-3 mx-4">
            ویرایش - حذف {SwitchProduct(product)}
          </h2>
          <RemovePorduct product={product} />
        </div>
      </div>
    </section>
  );
});

export default ProductManagment;
