import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/agile.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";

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
