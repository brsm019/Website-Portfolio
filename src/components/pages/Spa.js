import React from "react";
import Video from "../Video";
import LandingPage from "../LandingPage";

function Spa() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="Spa Website"
        p="Industry experience developing a website for a company"
        btnText="VIEW VIDEO"
        link="video"
      />
      <Video
        video="/videos/spa-video.mov"
        alt="Spa Residential Home"
        description="
        A website I created for a local residential home. Carrying out the entire process from initial designs, logo creation, promotional video, all the way through to development and deployment. This is their current site and can be viewed via the link below."
        text="VIEW WEBSITE"
        link="https://www.spa-residentialhome.co.uk/"
      />
    </div>
  );
}

export default Spa;
