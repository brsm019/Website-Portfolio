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
        description="The app consists of a frontend written in React and a backend written in Node.js, Express and PostgreSQL. The aim was to improve the relationship between bootcampers and mentors by gauging how closely linked the two parties are. The application does this by comparing both parties based on their industry and interests."
        text="VIEW SOURCE CODE"
        link="https://github.com/brsm019/bootcamper-mentor-matcher"
      />
    </div>
  );
}

export default MatchSoc;
