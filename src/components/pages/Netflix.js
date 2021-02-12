import React from "react";
import Video from "../Video";
import Title from "../Title";
import LandingPage from "../LandingPage";

function Netflix() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="Netflix look-a-like"
        p="Front-end application replicating Netflix's user interface"
        btnText="VIEW VIDEO"
        link="video"
      />
      <Video
        video="/videos/netflix-video.mov"
        alt="Netflix"
        description="Created with React, Node.js Express and PostgreSQL to persist data."
        link="https://github.com/brsm019/react-netflix"
      />
    </div>
  );
}

export default Netflix;
