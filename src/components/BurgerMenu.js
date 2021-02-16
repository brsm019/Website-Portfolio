import React from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function BurgerMenu({ className = "" }) {
  return (
    <div className="dropdown">
      <button className="menuButton">
        <img src="./images/menu.svg" alt="menu" className="menuImage" />
      </button>
      <div className="dropdownContent">
        <p className="link">
          <HashLink smooth to="/#home" className="navLink">
            Home
          </HashLink>
        </p>
        <p className="link">
          <HashLink smooth to="/#about" className="navLink">
            About
          </HashLink>
        </p>
        <p className="link">
          <HashLink smooth to="/#portfolio" className="navLink">
            Portfolio
          </HashLink>
        </p>
        <p className="link">
          <HashLink smooth to="/#contact" className="navLink">
            Contact
          </HashLink>
        </p>
      </div>
    </div>
  );
}

export default BurgerMenu;
