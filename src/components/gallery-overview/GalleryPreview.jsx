import React from "react";
import imageList from "../../Images";
import "./GalleryPreview.css";

function GalleryPreview() {
  return (
    <div className="galleryPreview">
      <h3 className="latestWork">My Latest Work</h3>
      <div className="imgGrid">
        {/* Display 10 images for the galley preview then navigate them to the gallery page */}
        {imageList?.slice(0, 10)?.map((img) => {
          return (
            <>
              <img src={img.path} alt={img.alt} width="100%" height="auto" />
            </>
          );
        })}
      </div>
      <button className="viewMoreBtn">View More</button>
    </div>
  );
}

export default GalleryPreview;
