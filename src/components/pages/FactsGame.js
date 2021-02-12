import React from "react";
import Video from "../Video";
import Title from "../Title";
import LandingPage from "../LandingPage";

function FactsGame() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="Facts! Game"
        p="Full Stack game and gaming platform"
        btnText="VIEW VIDEO"
        link="video1"
      />
      <section id="video1">
        <Video
          video="/videos/facts-game-video.mov"
          alt="Facts Game"
          description="Created with React, Node.js Express and PostgreSQL to persist data."
          link="https://github.com/brsm019/Final-Project-Frontend"
        />
      </section>
    </div>
  );
}

export default FactsGame;
