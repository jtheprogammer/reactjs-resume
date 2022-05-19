import React from "react";
import Gallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./CustomImageGallery.css"

const CustomImageGallery = (props) => {
  const imageList = props?.images?.map(image => {
    return {
      original: image,
      thumbnail: image
    };
  });

  return (
    <div>
      <Gallery items={imageList} showBullets />
    </div>
  )
}

export default CustomImageGallery;