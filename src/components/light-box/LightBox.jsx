import React, { useRef } from "react";
import "./LightBox.css";

function LightBox({ onClose, src, alt }) {
  return (
    <div className="lightBoxBackdrop">        <div className="closeBtn" onClick={onClose}>
          X
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
    </div>
  );
}

export default LightBox;
