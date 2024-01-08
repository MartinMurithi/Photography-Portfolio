import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLocationHome, setLocation] = useState("");
  const currentLocation = useLocation();

  useEffect(() => {
    setLocation(currentLocation.pathname === "/");
  }, [currentLocation]);

  return (
    <nav
      style={{ backgroundColor: isLocationHome ? "transparent" : "#172f47" }}
    >
      <div className="navSection">
        <div className="logoParent">
          <NavLink to="/" className="logoText">
            Roy
          </NavLink>
        </div>
        <ul className="navList">
          <li className="navLinkItem">
            <NavLink to={"/"} className="navLink">
              Home
            </NavLink>
          </li>
          <li className="navLinkItem">
            <NavLink to={"/gallery"} className="navLink">
              Gallery
            </NavLink>
          </li>
          <li className="navLinkItem">
            <NavLink to={"/contact"} className="navLink">
              Contact
            </NavLink>
          </li>

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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
