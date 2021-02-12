import React from "react";
import "../App.css";
import Button from "./Button";

import "./LandingPage.css";

function LandingPage({ src1, h1, p, btnText, link }) {
  return (
    <section id="landing">
      <div className="landing__page__container">
        <video src={src1} autoPlay loop muted />
        <h1>{h1}</h1>
        <p>{p}</p>
        <Button text={btnText} link={link} />
      </div>
    </section>
  );
}

export default LandingPage;
