import React from "react";
import "./LightBox.css";

function LightBox({ children, show, onClose }) {
  return (
    <>
      {show && (
        <div className="modalBackdrop" onClick={onClose}>
          <div className={`modalWrapper${show ? "active" : ""}`}>
            <div onClick={onClose} className="onCloseBtn">X</div>
            <div className="modalBody">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default LightBox;
