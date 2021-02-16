import React, { useEffect } from "react";
import "./About.css";
import Title from "./Title";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about">
      <div className="about">
        <div className="about__main__title">
          <Title title="About" />
        </div>
        <div className="about__picture">
          <img
            data-aos="slide-right"
            data-aos-once="true"
            data-aos-delay="150"
            className="about__img"
            src="/images/mugshot2.png"
          />
          <div className="about__text">
            <div className="about__text__title">
              <h1
                className="about__text__h1"
                data-aos="slide-right"
                data-aos-once="true"
                data-aos-delay="300"
              >
                Who is this guy?
              </h1>
              <div className="about__text__paragraph">
                <p
                  className="paragraph"
                  data-aos="slide-right"
                  data-aos-once="true"
                  data-aos-delay="300"
                >
                  I'm a fullstack developer with experience in conquering real
                  world problems in dynamic, remote tech teams. The creative
                  mindset, working in agile teams and being part of something
                  bigger, where the societal impact is exponential are the
                  founding reasons of joining the industry and I am extremely
                  excited as to what the future of tech holds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
