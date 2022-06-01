import React, { useState } from "react";
import { mobile } from "../../../../../data/mobile";
import { replacePrice } from "../../../../../utils/replacePrice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import DelModal from "./DelModal";
import EditModal from "./EditModal";

const RemovePorduct = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectPorduct, setSelectProduct] = useState({});

  return (
    <>
      <section className="md:grid grid-rows-2 grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2">
        {product[0]
          ? mobile.map((m, i) => (
              <article className="flex md:flex-col" key={i}>
                <div className="flex flex-row md:flex-col p-3  h-60 md:h-full justify-center  my-3  items-center border border-gray-400 rounded-lg">
                  <img
                    src={m.url}
                    alt={m.title}
                    className="w-1/3 md:w-2/3  h-full py-3"
                  />
                  <div className=" border-r border-r-gray-400 md:border-r-0">
                    <p className="my-3 p-3 ">{m.title}</p>
                    <p className="my-3 p-3 ">{replacePrice(m.price)} تومان</p>
                    <span className="flex">
                      <AiFillDelete
                        className="text-rose-600 text-2xl m-3"
                        onClick={() => {
                          setSelectProduct({ ...m });
                          setOpen(true);
                        }}
                      />
                      <AiFillEdit
                        className="text-indigo-600 text-2xl m-3"
                        onClick={() => {
                          setSelectProduct({ ...m });
                          setOpenEdit(true);
                        }}
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))
          : null}
        <DelModal open={open} setOpen={setOpen} data={selectPorduct} />
        <EditModal open={openEdit} setOpen={setOpenEdit} data={selectPorduct} />
      </section>
    </>
  );
};

export default RemovePorduct;
