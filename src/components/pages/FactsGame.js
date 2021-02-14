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
          description="
          A fullstack project to build the Facts! game and host it on a gaming platform where you enter a fact and lie then go against your teammates and see who knows most about everyone! The frontend was created with React, Storybook, MaterialUi, websockets. While the backend was built with AWS cognito, DynamoDB, node.js and websockets.
          
          For more information on tech stack click the link below."
          text="VIEW SORCE CODE"
          link="https://github.com/brsm019/Final-Project-Frontend"
        />
      </section>
    </div>
  );
}

export default FactsGame;
