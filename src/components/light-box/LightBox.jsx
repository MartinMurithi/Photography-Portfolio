import React from "react";
import "./LightBox.css";

function LightBox({
  onClose,
  src,
  alt,
  onClickNext,
  onClickPrev,
  currentImgIndex,
  totalImages,
}) {
  return (
    <div className="lightBoxBackdrop">
      <div className="counter-closeBtn">
        <p className="imageCounter">{currentImgIndex + "/" + totalImages}</p>
        <div className="closeBtn" onClick={onClose}>
          X
        </div>
      </div>

      <div className="lightBox">
        <div className="modalContent">
          <img
            src={src}
            alt={alt}
            width="100%"
            height="auto"
            className="lightBoxImg"
          />
        </div>
      </div>
      <div className="prev-next-btns">
        <img
          src="/assets/icons8-less-than-50.png"
          alt="Less Than Icon"
          width="45px"
          height="45px"
          className="prevBtn"
          onClick={onClickPrev}
        />
        <img
          src="/assets/icons8-greater-than-50.png"
          alt="Greater Than Icon"
          width="45px"
          height="45px"
          className="nextBtn"
          onClick={onClickNext}
        />
      </div>
    </div>
  );
}

export default LightBox;
