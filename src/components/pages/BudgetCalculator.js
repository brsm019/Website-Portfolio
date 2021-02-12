import React from "react";
import Video from "../Video";
import Title from "../Title";

function BudgetCalculator() {
  return (
    <section id="budget-calculator">
      <div>
        <Title title="Budget Calculator" />
        <Video
          video="/videos/budget-calculator-video.mov"
          alt="budget calculator"
          description="Created with React, Node.js Express and PostgreSQL to persist data."
          link="https://github.com/brsm019/React-Budget-Calculator-Frontend"
        />
      </div>
    </section>
  );
}

export default BudgetCalculator;
