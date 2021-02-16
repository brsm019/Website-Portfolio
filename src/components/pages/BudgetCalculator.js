import React from "react";
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
            description="This is a full-stack project that acts a a budget calculator. The user can add and delete both income and expenditure and it will automatically update the total amount, built with React using useReducer hook and API context, the data persists with the use of a PostgreSQL database. For more info view the source code."
            text="VIEW SORCE CODE"
            link="https://github.com/brsm019/React-Budget-Calculator-Frontend"
          />
        </section>
      </div>
    </section>
  );
}

export default BudgetCalculator;
