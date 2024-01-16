import React from "react";
import { NavLink } from "react-router-dom";

function MobileNavBar() {
  return (
    <nav className="mobileNav">
      <ul className="mobileNavList">
        <li className="mobileNavLinkItem">
          <NavLink to={"/"} className="mobileNavLink">
            Home
          </NavLink>
        </li>
        <li className="mobileNavLinkItem">
          <NavLink to={"/gallery"} className="mobileNavLink">
            Gallery
          </NavLink>
        </li>
        <li className="mobileNavLinkItem">
          <NavLink to={"/contact"} className="mobileNavLink">
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="mobileNavIcons">
        <li className="navIcon">
          <a href="https://www.instagram.com/roy_wangui">
            <img
              src="/assets/icons8-instagram-black-50.png"
              alt="Instagram Icon"
              height="20px"
              width="20px"
            />
          </a>
        </li>
        <li className="navIcon">
          <a href="" target="_blank">
            <img
              src="/assets/icons8-twitterx-black-50.png"
              alt="X Icon"
              height="20px"
              width="20px"
            />
          </a>
        </li>
        <li className="navIcon">
          <a href="https://wa.me/254768402381" target="_parent">
            <img
              src="/assets/icons8-whatsapp-black-50.png"
              alt="Whatsapp Icon"
              height="20px"
              width="20px"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavBar;
