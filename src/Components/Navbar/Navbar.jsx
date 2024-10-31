import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import line from "../../assets/Line.png";
import menu_icon from "../../assets/Menu-icon.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="container">
      <div className="logo-p">
        <img src={logo} alt="" className="logo" />
        <p className="ptag">
          Portal
          <br />
          Architecture
        </p>
      </div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>About us</li>
        <li>Portofolio</li>
        <li>Products</li>
        <li>How it works</li>
        <img src={line} alt="" className="line" />
        <li className="exp">Explore</li>
        <li><button className="btn">CONTACT US</button></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
