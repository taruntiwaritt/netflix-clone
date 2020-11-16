import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Netflix from "./Components/Netflix/Netflix";
import "./css/App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Netflix} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
