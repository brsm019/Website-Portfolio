import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import "./Video.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Video({ video, description, link, text }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="video">
      <div className="video__container">
        <video
          className="video__video"
          controls
          autoPlay
          loop
          muted
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-easing="ease-in-out-back"
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div
        className="video__description__container"
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-easing="ease-in-out-back"
      >
        <p className="video__description">{description}</p>
      </div>
      <a className="video__link" href={link}>
        {text}
      </a>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Video;
