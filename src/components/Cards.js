import React, { useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="portfolio">
      <div className="cards">
        <h1 data-aos="slide-left" data-aos-once="true">
          Projects
        </h1>
        <div
          className="h1__underline2"
          data-aos="fade"
          data-aos-once="true"
        ></div>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <div data-aos="slide-up" data-aos-once="true">
                <CardItem
                  src="images/budget-calculator.png"
                  text="Budget Calculator"
                  label="React/ Node.js/ Express"
                  path="/budget-calculator"
                />
              </div>
              <div
                data-aos="slide-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <CardItem
                  src="images/facts-game.png"
                  text="Facts Game & Gaming Platform"
                  label="React/ Storybook/ AWS cognito/ DynamoDB"
                  path="/facts-game"
                />
              </div>
            </ul>
            <ul className="cards__items">
              <div data-aos="slide-up" data-aos-once="true">
                <CardItem
                  src="images/netflix.png"
                  text="Netflix look-a-like"
                  label="React / TMDB API"
                  path="/netflix"
                />
              </div>
              <div
                data-aos="slide-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <CardItem
                  src="images/mentor-match.png"
                  text="Match SoC"
                  label="React/ Node.js/ Express/ PostgreSQL"
                  path="/match-soc"
                />
              </div>
            </ul>
            <ul className="cards__items">
              <div data-aos="slide-up" data-aos-once="true">
                <CardItem
                  src="images/todoList.png"
                  text="To Do List"
                  label="React"
                  path="/todolist"
                />
              </div>
              <div
                data-aos="slide-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <CardItem
                  src="images/tiktaktoe.png"
                  text="Noughts & Crosses"
                  label="React"
                  path="/noughtscrosses"
                />
              </div>
            </ul>
            <ul className="cards__items">
              <div data-aos="slide-up" data-aos-once="true">
                <CardItem
                  src="images/spa.png"
                  text="Spa Website"
                  label="Work in industry"
                  path="/spa"
                />
              </div>
              <div
                data-aos="slide-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <CardItem
                  src="images/garage.png"
                  text="Vehicle Service Center"
                  label="Work in industry"
                  path="/garage"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
