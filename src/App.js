import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BudgetCalculator from "./components/pages/BudgetCalculator";
import FactsGame from "./components/pages/FactsGame";
import Netflix from "./components/pages/Netflix";
import MatchSoc from "./components/pages/MatchSoc";
import ScrollToTop from "./components/ScrollToTop";
import Todolist from "./components/pages/Todolist";
import Tiktaktoe from "./components/pages/Tiktaktoe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/budget-calculator" component={BudgetCalculator} />
          <Route path="/facts-game" component={FactsGame} />
          <Route path="/netflix" component={Netflix} />
          <Route path="/match-soc" component={MatchSoc} />
          <Route path="/todolist" component={Todolist} />
          <Route path="/noughtscrosses" component={Tiktaktoe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
