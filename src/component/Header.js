import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";

const Header = ({ currentPage, handleNavigation }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderNavigationItemClass = (pageName) => {
    return currentPage === pageName ? "active" : "";
  };

  const handleNavClick = (pageName) => {
    handleNavigation(pageName);
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };

    const handleScrollClose = () => {
      setIsNavOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollClose);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowHeader(true);
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(false);
        setIsNavOpen(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header
        ref={navRef}
        className={`header ${isNavOpen ? "open" : ""} ${
          showHeader ? "show" : "hide"
        }`}
      >
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
              onClick={() => handleNavClick("Home")}
            >
              Home
            </li>

            <li
              className={renderNavigationItemClass("Weather")}
              onClick={() => handleNavClick("Weather")}
            >
              Cuaca
            </li>

            <li
              className={renderNavigationItemClass("Place")}
              onClick={() => handleNavClick("Place")}
            >
              Tempat Wisata
            </li>

            <li
              className={renderNavigationItemClass("Culture")}
              onClick={() => handleNavClick("Culture")}
            >
              Budaya
            </li>

            <li
              className={renderNavigationItemClass("Profile")}
              onClick={() => handleNavClick("Profile")}
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