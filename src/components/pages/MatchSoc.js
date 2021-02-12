import React from "react";
import Video from "../Video";
import LandingPage from "../LandingPage";

function MatchSoc() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="Match SoC"
        p="PERN full-stack application that matches bootcampers with mentors"
        btnText="VIEW VIDEO"
        link="video"
      />
      <Video
        video="/videos/match-soc-video.mov"
        alt="Match SoC"
        description="Created with React, Node.js Express and PostgreSQL to persist data."
        link="https://github.com/brsm019/bootcamper-mentor-matcher"
      />
    </div>
  );
}

export default MatchSoc;
