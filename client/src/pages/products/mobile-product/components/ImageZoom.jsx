import React from "react";
import InnerImageZoom from "react-inner-image-zoom";

const ImageZoom = ({ item }) => {
  return (
    <div className="w-1/3">
      <InnerImageZoom
        alt="img_product"
        src={item.url}
        zoomSrc={item.url}
        moveType="pan"
        zoomType="hover"
        fadeDuration={100}
        hideCloseButton={false}
      />
    </div>
  );
};

export default ImageZoom;
