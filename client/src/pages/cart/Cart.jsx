import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiStar, BiStoreAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { replaceNumberToPersian } from "../../utils/replacePrice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="md:mt-32 content-around border">
      <ul className="my-3 mx-2">
        <li className="border-b-2 border-b-rose-600 rounded-b-sm inline py-1">
          سبد خرید
        </li>
      </ul>

      {cart.length > 0 ? (
        <section>
          <h2 className="p-3">سبد خرید شما</h2>
          <p className="text-gray-500 p-2">{cart.length} کالا</p>
          {cart.map((item, index) => (
            <figure className="border flex p-3" key={item.id}>
              <div className="w-1/3">
                <img
                  alt="product_img"
                  src={process.env.PUBLIC_URL + item.url}
                />
              </div>
              <div className="w-2/3 flex flex-col">
                <h2>{item.title}</h2>
                <span className="flex mt-2  text-gray-500">
                  <AiOutlineSafety className="text-2xl mx-3 " />
                  گارانتی {replaceNumberToPersian(18)} ماهه
                </span>
                <span className="flex my-1 items-center text-gray-500">
                  <BiStar className="text-yellow-500 mx-3" />
                  {replaceNumberToPersian(item.rate)}
                </span>
                <span className="flex my-1 items-center text-gray-500">
                  <BiStoreAlt className="mx-3 text-xl" />
                  موجود در انبار
                </span>
              </div>
            </figure>
          ))}
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            style={{
              borderRadius: "55% 45% 55% 45% / 50% 58% 42% 50%  ",
            }}
            alt="empty_cart"
            className="md:w-96 md:h-80 w-64 h-52"
            src={process.env.PUBLIC_URL + "/images/cart/empty_cart.jpg"}
          />
          <h2 className="text-xl md:text-2xl py-3">
            سبد خرید شما خالی می باشد
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
