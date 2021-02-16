import React from "react";
import "../App.css";
import Button from "./Button";

import "./LandingPage.css";

function LandingPage({ src1, h1, p, btnText, link }) {
  return (
    <section id="landing">
      <div className="landing__page__container">
        <video
          src={src1}
          autoPlay
          loop
          muted
          className="landing__video__controls"
        />
        <h1>{h1}</h1>
        <div className="landing__page__button">
          <Button text={btnText} link={link} />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
