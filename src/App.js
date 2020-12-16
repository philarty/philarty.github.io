import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./css/abacus.css";
import Header from "./containers/Header.js";
import Footer from "./containers/Footer.js";

import FourOhFour from "./containers/FourOhFour.js";

import About from "./containers/About.js";
import ProjectIndex from "./containers/ProjectIndex.js";
import Project from "./containers/Project.js";


function App() {
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={ProjectIndex} />

        <Route exact path="/design" component={ProjectIndex} />
        <Route exact path="/code" component={ProjectIndex} />
        <Route exact path="/make" component={ProjectIndex} />

        <Route exact path="/about" component={About} />

        <Route path="/project/:projectName" component={Project} />




        
        <Route exact path="/404" component={FourOhFour} />

        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
