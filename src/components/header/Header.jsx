import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Navbar from "../navbar/Navbar";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar />
      <div className="headerText">
        <h2 className="headerText1">Hello! I'm Roy Wangui</h2>
        <p className="headerText2">
          A Kenyan Nature Photographer
        </p>
        <button className="viewGallery" onClick={() => navigate("/gallery")}>
          Explore Gallery
        </button>
      </div>
    </header>
  );
}

export default Header;
