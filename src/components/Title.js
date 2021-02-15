import React, { useEffect } from "react";
import "./Title.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Title({ title }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="title__container">
      <h1 data-aos="slide-right" data-aos-once="false" className="title__text">
        {title}
      </h1>
      <div
        data-aos="fade"
        data-aos-delay="200"
        data-aos-once="false"
        className="title__underline"
      ></div>
    </div>
  );
}

export default Title;
