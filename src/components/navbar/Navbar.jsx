import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logoParent">
        <h2 className="logoText">Roy</h2>
      </div>

      <ul className="navList">
        <li className="navLinkItem">Home</li>
        <li className="navLinkItem">Gallery</li>
        <li className="navLinkItem">Contact</li>
      </ul>

      <ul className="navSocialIcons">
        <li className="navIcon">
          <a href="">
            <img
              src="/assets/icons8-instagram-50.png"
              alt="Instagram Icon"
              height="18px"
              width="18px"
            />
          </a>
        </li>
        <li className="navIcon">
          <a href="">
            <img
              src="/assets/icons8-twitterx-50.png"
              alt="X Icon"
              height="18px"
              width="18px"
            />
          </a>
        </li>
        <li className="navIcon">
          <a href="">
            <img
              src="/assets/icons8-whatsapp-50.png"
              alt="Whatsapp Icon"
              height="18px"
              width="18px"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
