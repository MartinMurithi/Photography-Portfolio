import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import imageList from "../data/Images";
import LazyImage from "../components/LazyImage";
import "../components/gallery-preview/GalleryPreview.css";
import LightBox from "../components/light-box/LightBox";

function Gallery() {
  return (
    <div>
      <Navbar />
      <h2 className="galleryText">Explore the gallery</h2>

      <div className="imgGrid" style={{ marginTop: "20px", width: "98%" }}>
        {imageList?.map((img, index) => {
          return (
            <div key={index}>
              <LazyImage
                src={img.path}
                alt={img.alt}
                imagesList={imageList}
                placeholder={img.placeholder}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
