import React from "react";
import "./BudgetCalculator.css";
import Video from "../Video";
import LandingPage from "../LandingPage";

function BudgetCalculator() {
  return (
    <section id="budget-calculator">
      <div>
        <LandingPage
          src1="/videos/project-page-bg-3.mov"
          h1="Budget Calculator"
          p="PERN full-stack PWA that tracks income and expenditure"
          btnText="VIEW VIDEO"
          link="video"
        />

        <section id="video">
          <Video
            video="/videos/budget-calculator-video.mov"
            alt="budget calculator"
            description="Created with React, Node.js Express and PostgreSQL to persist data."
            link="https://github.com/brsm019/React-Budget-Calculator-Frontend"
          />
        </section>
      </div>
    </section>
  );
}

export default BudgetCalculator;
