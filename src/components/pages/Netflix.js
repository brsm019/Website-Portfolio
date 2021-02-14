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
        description="This is a frontend application that was used to test my knowledge of React, fetching from an API (TMDB) and also my CSS skills. For this project I used axios to create an instance and have all fetch requests in a file of their own for a separation of concerns. I then used React to display the information on the page and styled with CSS using flexbox."
        link="https://github.com/brsm019/react-netflix"
      />
    </div>
  );
}

export default Netflix;
