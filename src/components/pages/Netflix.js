import React from "react";
import Video from "../Video";
import Title from "../Title";

function Netflix() {
  return (
    <div>
      <Title title="Netflix" />
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
