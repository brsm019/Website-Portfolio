import React from "react";
import "./About.css";
import Title from "./Title";

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about__main__title">
          <Title title="About" />
        </div>
        <div className="about__picture">
          <img className="about__img" src="/images/mugshot2.png" />
          <div className="about__text">
            <div className="about__text__title">
              <h1 className="about__text__h1">Who is this guy?</h1>
              <div className="about__text__paragraph">
                <p className="paragraph">
                  I'm a fullstack developer with experience in conquering real
                  world problems in dynamic, remote tech teams. The creative
                  mindset, working in agile teams and being part of something
                  bigger, where the societal impact is exponential are the
                  founding reasons of joining the industry and I am extremely
                  excited as to what the future of tech holds.{" "}
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
