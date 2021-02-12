import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BudgetCalculator from "./components/pages/BudgetCalculator";
import FactsGame from "./components/pages/FactsGame";
import Netflix from "./components/pages/Netflix";
import MatchSoc from "./components/pages/MatchSoc";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/budget-calculator" component={BudgetCalculator} />
          <Route path="/facts-game" component={FactsGame} />
          <Route path="/netflix" component={Netflix} />
          <Route path="/match-soc" component={MatchSoc} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
