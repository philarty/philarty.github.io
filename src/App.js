import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./css/abacus.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ProfileSection from "./components/ProfileSection.js";

import FourOhFour from "./containers/FourOhFour.js";

import About from "./containers/About.js";
import ProjectIndex from "./containers/ProjectIndex.js";
// import Project from "./containers/Project.js";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);

  return (
    <div className={"app" + (isDarkTheme ? " dark" : " light")}>
      <ScrollToTop />
      <Header onToggleTheme={() => toggleDarkTheme(!isDarkTheme)} />
      <Switch>
        <Route exact path="/">
          <section className="about">
            <ProfileSection />
          </section>
          <ProjectIndex />
        </Route>

        <Route exact path="/projects" component={ProjectIndex} />
        <Route exact path="/projects/design" component={ProjectIndex} />
        <Route exact path="/projects/code" component={ProjectIndex} />
        <Route exact path="/projects/make" component={ProjectIndex} />

        <Route exact path="/about" component={About} />

        {/* <Route path="/project/:projectName" component={Project} /> */}

        <Route exact path="/404" component={FourOhFour} />

        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
