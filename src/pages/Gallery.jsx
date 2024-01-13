import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import imageList from "../data/Images";
import LazyImage from "../components/LazyImage";
import "../components/gallery-preview/GalleryPreview.css";
import LightBox from "../components/light-box/LightBox";

function Gallery() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clickedImgPath, setClickedImgPath] = useState("");
  const [imgIndex, setImgIndex] = useState(0);

  const onHandleOpenDialog = (index) => {
    setIsDialogOpen(true);
    setClickedImgPath(imageList[index].path);
    setImgIndex(index);
  };

  const onHandleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleNextImage = () => {
    if (imgIndex < imageList.length - 1) {
      setImgIndex((imgIndex) => imgIndex + 1);
    }
  };

  const handlePrevImg = () => {
    if (imgIndex > 0) {
      setImgIndex((imgIndex) => imgIndex - 1);
    }
  };

  useEffect(() => {
    setClickedImgPath(imageList[imgIndex]?.path);
    console.log(imgIndex);
  }, [imgIndex, imageList]);

  return (
    <div>
      <Navbar />
      <h2 className="galleryText">Explore the gallery</h2>

      <div
        className="imgGrid"
        style={{
          display: isDialogOpen ? "none" : "block",
          marginTop: "20px",
          width: "98%",
        }}
      >
        {imageList?.map((img, index) => {
          return (
            <div key={index} onClick={() => onHandleOpenDialog(index)}>
              <LazyImage
                src={img.path}
                alt={img.alt}
                imagesList={imageList}
                placeholder={img.placeholder}
              />
            </div>
          );
        })}
      </div>
      {isDialogOpen && (
        <LightBox
          onClose={onHandleCloseDialog}
          src={clickedImgPath}
          alt={clickedImgPath}
          onClickPrev={handlePrevImg}
          onClickNext={handleNextImage}
        />
      )}
    </div>
  );
}

export default Gallery;
