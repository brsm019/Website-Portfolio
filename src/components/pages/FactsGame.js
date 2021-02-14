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
          description="The project was carried out in a tech team of 5 individuals. We created the Facts! game and gaming platform. Enter a fact and lie then go against your teammates and see who knows most about everyone!"
          text="VIEW SORCE CODE"
          link="https://github.com/brsm019/Final-Project-Frontend"
        />
      </section>
    </div>
  );
}

export default FactsGame;
