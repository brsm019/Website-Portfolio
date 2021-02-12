import React from "react";
import Video from "../Video";
import Title from "../Title";

function FactsGame() {
  return (
    <div>
      <Title title="Facts Game" />
      <Video
        video="/videos/facts-game-video.mov"
        alt="Facts Game"
        description="Created with React, Node.js Express and PostgreSQL to persist data."
        link="https://github.com/brsm019/Final-Project-Frontend"
      />
    </div>
  );
}

export default FactsGame;
