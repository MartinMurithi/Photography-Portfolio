import React from "react";
import Navbar from "../components/navbar/Navbar";
import imageList from "../Images";
import "../components/gallery-preview/GalleryPreview.css";

function Gallery() {
  return (
    <div>
      <Navbar />
      <h2 className="galleryText">Explore the gallery</h2>
      <div className="imgGrid" style={{marginTop:"20px", width:"98%"}}>
        {imageList?.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image.path}
                alt={image.alt}
                width="100%"
                height="auto"
                className="imgItem"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
