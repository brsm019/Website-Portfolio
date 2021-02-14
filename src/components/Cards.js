import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <section id="portfolio">
      <div className="cards">
        <h1>Projects</h1>
        <div className="h1__underline2"></div>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/budget-calculator.png"
                text="Budget Calculator"
                label="React/ Node.js/ Express"
                path="/budget-calculator"
              />
              <CardItem
                src="images/facts-game.png"
                text="Facts Game & Gaming Platform"
                label="React/ Storybook/ AWS cognito/ DynamoDB"
                path="/facts-game"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/netflix.png"
                text="Netflix look-a-like"
                label="React / TMDB API"
                path="/netflix"
              />
              <CardItem
                src="images/mentor-match.png"
                text="Match SoC"
                label="React/ Node.js/ Express/ PostgreSQL"
                path="/match-soc"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/todoList.png"
                text="To Do List"
                label="React"
                path="/todolist"
              />
              <CardItem
                src="images/tiktaktoe.png"
                text="Noughts & Crosses"
                label="React"
                path="/noughtscrosses"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
