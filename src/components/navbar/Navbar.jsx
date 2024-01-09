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
    <nav style={{ backgroundColor: isLocationHome ? "transparent" : "#white" }}>
      <div className="navSection">
        <div className="logoParent">
          <NavLink
            to="/"
            className="logoText"
            style={{ color: isLocationHome ? "white" : "black" }}
          >
            Roy Wangui
          </NavLink>
        </div>
        <ul
          className="navList"
          style={{ color: isLocationHome ? "white" : "#5e5f5e" }}
        >
          <li
            className="navLinkItem"
            style={{ color: isLocationHome ? "white" : "#5e5f5e" }}
          >
            <NavLink
              to={"/"}
              className="navLink"
              style={{ color: isLocationHome ? "white" : "#5e5f5e" }}
            >
              Home
            </NavLink>
          </li>
          <li className="navLinkItem">
            <NavLink
              to={"/gallery"}
              className="navLink"
              style={{ color: isLocationHome ? "white" : "black" }}
            >
              Gallery
            </NavLink>
          </li>
          <li
            className="navLinkItem"
            style={{ color: isLocationHome ? "white" : "black" }}
          >
            <NavLink
              to={"/contact"}
              className="navLink"
              style={{ color: isLocationHome ? "white" : "black" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="navSocialIcons">
          <li className="navIcon">
            <a href="">
              <img
                src={
                  isLocationHome
                    ? "/assets/icons8-instagram-50.png"
                    : "/assets/icons8-instagram-black-50.png"
                }
                alt="Instagram Icon"
                height="20px"
                width="20px"
              />
            </a>
          </li>
          <li className="navIcon">
            <a href="">
              <img
                src={
                  isLocationHome
                    ? "/assets/icons8-twitterx-50.png"
                    : "/assets/icons8-twitterx-black-50.png"
                }
                alt="X Icon"
                height="20px"
                width="20px"
              />
            </a>
          </li>
          <li className="navIcon">
            <a href="">
              <img
                src = {
                  isLocationHome
                    ? "/assets/icons8-whatsapp-50.png"
                    : "/assets/icons8-whatsapp-black-50.png"
                }
                alt="Whatsapp Icon"
                height="20px"
                width="20px"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
