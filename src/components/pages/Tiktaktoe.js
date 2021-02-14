import React from "react";
import Video from "../Video";
import LandingPage from "../LandingPage";

function Tiktaktoe() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="Noughts & Crosses"
        p="Front-end creation of a to do list"
        btnText="VIEW VIDEO"
        link="video"
      />
      <Video
        video="/videos/tiktaktoe-video.mov"
        alt="Noughts&Crosses"
        description="My first React application written after learning the basics of React. The application uses an Object Oriented approach seen by the components being separated into their individual components, such as the board, game, sqaures and winner. Once the game logic was created it was styled using CSS."
        link="https://github.com/brsm019/react-tik-tak-toe"
      />
    </div>
  );
}

export default Tiktaktoe;
