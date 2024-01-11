import React from "react";
import { useNavigate } from "react-router-dom";
import imageList from "../../data/Images";
import "./GalleryPreview.css";
import LazyImage from "../LazyImage";

function GalleryPreview() {
  const navigate = useNavigate();
  return (
    <div className="galleryPreview">
      <h3 className="latestWork">My Latest Work</h3>
      <div className="imgGrid">
        {/* Display 10 images for the galley preview then navigate them to the gallery page */}
        {imageList?.slice(0, 10)?.map((img, index) => {
          return (
            <div key={index}>
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
    </div>
  );
}

export default GalleryPreview;
