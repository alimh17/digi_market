import React, { useRef, useState } from "react";
import { ToastProvider } from "react-toast-notifications";

import ModalComponent from "../../../../../../components/modal/ModalComponent";
import Form from "./Form";
import CurrentBanners from "./CurrentBanners";
import AddAndDeleteBanners from "./AddAndDeleteBanners";
import TitleBanner from "./TitleBanner";
import SubmitChanges from "./SubmitChanges";
import { SliderData } from "../../../../../../data/slider";

const FirstBanners = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [selectedBannersForDel, setSelectedBannersForDel] = useState({});

  const IconRef = useRef([]);
  const ImgRef = useRef([]);

  IconRef.current = SliderData.map((_, i) => {
    return IconRef.current[i] ?? React.createRef();
  });
  ImgRef.current = SliderData.map((_, i) => {
    return ImgRef.current[i] ?? React.createRef();
  });

  const handleAddStyle = (e, i, item) => {
    if (IconRef.current[i].current.classList.contains("text-gray-400")) {
      IconRef.current[i].current.classList.replace(
        "text-gray-400",
        "text-rose-800"
      );
      ImgRef.current[i].current.classList.replace("opacity-100", "opacity-40");
      let selected = [];
      selectedBannersForDel.selected
        ? (selected = [...selectedBannersForDel.selected])
        : (selected = []);
      selected.push(item);
      setSelectedBannersForDel({ selected });
    } else {
      IconRef.current[i].current.classList.replace(
        "text-rose-800",
        "text-gray-400"
      );
      ImgRef.current[i].current.classList.replace("opacity-40", "opacity-100");

      const filter = selectedBannersForDel.selected.filter(
        (f) => f.url !== item.url
      );
      setSelectedBannersForDel({ selected: filter });
    }
  };

  return (
    <section className="w-full">
      <TitleBanner />
      <div className="grid md:grid-rows-2 md:grid-cols-2 gap-3 m-2">
        <CurrentBanners
          data={SliderData}
          IconRef={IconRef}
          ImgRef={ImgRef}
          showDeleteIcon={showDeleteIcon}
          click={handleAddStyle}
        />
        <AddAndDeleteBanners
          show={setShowModal}
          delIcon={setShowDeleteIcon}
          showIcon={showDeleteIcon}
          selectedDel={setSelectedBannersForDel}
          ImgRef={ImgRef}
          IconRef={IconRef}
        />
        {showDeleteIcon && <SubmitChanges />}
      </div>
      {showModal && (
        <ToastProvider>
          <ModalComponent>
            <Form show={setShowModal} />
          </ModalComponent>
        </ToastProvider>
      )}
    </section>
  );
};

export default FirstBanners;
