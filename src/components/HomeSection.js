import React from "react";
import "../App.css";
import Button from "./Button";

import "./HomeSection.css";

function HomeSection() {
  return (
    <section id="home">
      <div className="home__container">
        <video src="/videos/PlexusBg.mov" autoPlay loop muted />
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Bradley Smith</h1>
        <p>Full-stack developer</p>
        <div className="home__btns">
          <Button text="VIEW PROJECTS" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
