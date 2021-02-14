import React from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import "./Video.css";
function Video({ video, description, link }) {
  return (
    <div className="video">
      <div className="video__container">
        <video className="video__video" controls autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div className="video__description__container">
        <p className="video__description">{description}</p>
      </div>
      <a className="video__link" href={link}>
        VIEW SOURCE CODE
      </a>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Video;
