import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "./BurgerMenu";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <>
      <div class="mobile-container">
        <div class="topnav">
          <nav className={`navbar ${show && "navbar__black"}`}>
            <BurgerMenu className="dropdown" />
            <div className="navbar__container">
              <Link to="/" className="navbar__logo">
                BS
              </Link>
              <ul className={click ? "nav__menu active" : "nav__menu"}>
                <li className="nav__item">
                  <HashLink smooth to="/#home" className="nav__links">
                    Home
                  </HashLink>
                </li>
                <li className="nav__item">
                  <HashLink smooth to="/#about" className="nav__links">
                    About
                  </HashLink>
                </li>
                <li className="nav__item">
                  <HashLink smooth to="/#portfolio" className="nav__links">
                    Portfolio
                  </HashLink>
                </li>
                <li className="nav__item">
                  <HashLink smooth to="/#contact" className="nav__links">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
