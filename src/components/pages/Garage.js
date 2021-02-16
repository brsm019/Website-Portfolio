import React from "react";
import Video from "../Video";
import LandingPage from "../LandingPage";

function Spa() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="Vehicle Service Center"
        p="Industry experience developing a website for a company"
        btnText="VIEW VIDEO"
        link="video"
      />
      <Video
        video="/videos/garage-video.mov"
        alt="Spa Residential Home"
        description="A website I created for a local vehicle service center. Carrying out the entire process from initial designs and logo creation through to development and deployment."
        text="Back to Home"
        link="/"
      />
    </div>
  );
}

export default Spa;
