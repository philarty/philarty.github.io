import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/agile.css";
import Header from "./containers/Header.js";
import Content from "./containers/Content.js";
import Footer from "./containers/Footer.js";
import About from "./containers/About.js";

function App() {
  return (
    <Router basename="/">
      <Header />

      <Route exact path="/" component={Content} />
      <Route path="/about" component={About} />

      <Footer />
    </Router>
  );
}

export default App;
