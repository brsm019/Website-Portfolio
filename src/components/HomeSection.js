import React from "react";
import "../App.css";
import Button from "./Button";

import "./HomeSection.css";

function HomeSection({ src1, h1, p }) {
  return (
    <section id="home">
      <div className="home__container">
        <video src={src1} autoPlay loop muted />
        <h1>{h1}</h1>
        <p>{p}</p>
        <div className="home__btns">
          <Button text="VIEW PROJECTS" link="portfolio" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
