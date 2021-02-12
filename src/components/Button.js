import React from "react";
import "./Button.css";
import { Link } from "react-scroll";

function Button({ text }) {
  return (
    <div className="button__container">
      <Link
        className="button__submit-btn"
        smooth={true}
        duration={1500}
        to="portfolio"
      >
        {text}
      </Link>
    </div>
  );
}

export default Button;
