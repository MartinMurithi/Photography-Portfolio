import React from "react";
import { useNavigate } from "react-router-dom";
import imageList from "../../Images";
import "./GalleryPreview.css";

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
              <img src={img.path} alt={img.alt} width="100%" height="auto" className="imgItem" />
            </div>
          );
        })}
      </div>
      <button className="viewMoreBtn" onClick={()=>navigate("/gallery")}>View More</button>
    </div>
  );
}

export default GalleryPreview;
