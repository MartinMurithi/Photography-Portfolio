import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import MobileNavBar from "../navbar/MobileNavBar";
import Navbar from "../navbar/Navbar";

function Header() {
    // const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <Navbar />
      {/* <MobileNavBar isMobilenavBarOpen={isMobileNavbarOpen} /> */}
      <div className="headerText">
        <h2 className="headerText1">Hello! I'm Roy Wangui</h2>
        <p className="headerText2">
          A freelance photographer from Nairobi, Kenya
        </p>
        <button className="viewGallery" onClick={() => navigate("/gallery")}>
          Explore Gallery
        </button>
      </div>
    </header>
  );
}

export default Header;
