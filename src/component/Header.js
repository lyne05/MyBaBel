import React, { useState } from "react";
import logo from "../images/logo.png";

const Header = ({ currentPage, handleNavigation }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderNavigationItemClass = (pageName) => {
    return currentPage === pageName ? "active" : "";
  };

  return (
    <div>
      <header className={`header ${isNavOpen ? "open" : ""}`}>
        <img src={logo} alt="logo" className="logo" />
        <h1>MyBaBel</h1>

        <div
          className={`menu-toggle ${isNavOpen ? "open" : ""}`}
          onClick={toggleNav}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav>
          <ul className={`nav-section ${isNavOpen ? "open" : ""}`}>
            <li
              className={renderNavigationItemClass("Home")}
              onClick={() => handleNavigation("Home")}
            >
              Home
            </li>
            <li
              className={renderNavigationItemClass("Weather")}
              onClick={() => handleNavigation("Weather")}
            >
              Weather
            </li>
            <li
              className={renderNavigationItemClass("Place")}
              onClick={() => handleNavigation("Place")}
            >
              Tempat Wisata
            </li>
            <li
              className={renderNavigationItemClass("Culture")}
              onClick={() => handleNavigation("Culture")}
            >
              Budaya
            </li>
            <li
              className={renderNavigationItemClass("Profile")}
              onClick={() => handleNavigation("Profile")}
            >
              About us
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
