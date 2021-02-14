import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="footer__container">
        <section className="footer__subscription">
          {/* <p className="footer-social">Social</p> */}
          <div className="footer__icon__container">
            <div className="footer__icon__github">
              <a href="https://github.com/brsm019">
                <GoMarkGithub className="github__icon" />
              </a>
            </div>
            <div className="footer__icon__linkedin">
              <a href="https://www.linkedin.com/in/bradleyjsmith1/">
                <FaLinkedin className="linkedin__icon" />
              </a>
            </div>
          </div>
          <small class="footer__website__rights">Bradley Smith © 2021</small>
        </section>
      </div>
    </IconContext.Provider>
  );
}

export default Footer;
