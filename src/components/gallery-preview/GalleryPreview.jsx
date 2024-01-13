import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import imageList from "../../data/Images";
import "./GalleryPreview.css";
import LazyImage from "../LazyImage";
import LightBox from "../light-box/LightBox";

function GalleryPreview() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clickedImgPath, setClickedImgPath] = useState(null);
  const [imgIndex, setImgIndex] = useState(null);

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
    <div className="galleryPreview">
      <h3 className="latestWork">My Latest Work</h3>
      <div
        className="imgGrid"
        style={{
          display: isDialogOpen ? "none" : "block",
          marginTop: "20px",
          width: "98%",
        }}
      >
        {/* Display 10 images for the galley preview then navigate them to the gallery page */}
        {imageList?.slice(0, 10)?.map((img, index) => {
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
      <button className="viewMoreBtn" onClick={() => navigate("/gallery")}>
        View More
      </button>
      {isDialogOpen && (
        <LightBox
          onClose={onHandleCloseDialog}
          src={clickedImgPath}
          alt={clickedImgPath}
          onClickPrev={handlePrevImg}
          onClickNext={handleNextImage}
          currentImgIndex={imgIndex + 1}
          totalImages={imageList.length}
        />
      )}
    </div>
  );
}

export default GalleryPreview;
