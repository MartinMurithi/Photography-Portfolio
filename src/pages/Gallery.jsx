import React from "react";
import Navbar from "../components/navbar/Navbar";
import imageList from "../Images";
import LazyImage from "../components/LazyImage";
import "../components/gallery-preview/GalleryPreview.css";

function Gallery() {
  return (
    <div>
      <Navbar />
      <h2 className="galleryText">Explore the gallery</h2>
      <div className="imgGrid" style={{ marginTop: "20px", width: "98%" }}>
        {imageList?.map((image, index) => {
          return (
            <div key={index}>
              <LazyImage src={image.path} alt={image.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
