import React from "react";
import Video from "../Video";
import Title from "../Title";

function MatchSoc() {
  return (
    <div>
      <Title title="MatchSoc" />
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
