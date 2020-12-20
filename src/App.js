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

import Button from "./components/Button";
import Icon from "./components/Icon";

const App = () => {
  //detects user OS color theme preference.
  const preferDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, toggleDarkTheme] = useState(preferDark);

  return (
    <div className={"app" + (isDarkTheme ? " dark" : " light")}>
      <ScrollToTop />
      <Header
        onToggleTheme={() => toggleDarkTheme(!isDarkTheme)}
        isDarkTheme={isDarkTheme}
      />
      <Switch>
        <Route exact path="/">
          <section className="about">
            <ProfileSection />
          </section>
          <ProjectIndex />
          {/* <section className="about">
            <div>
              <Button btnStyle="outline">hello</Button>
              <Button>hello</Button>
              <Button icon>
                <Icon icon="moon" />
              </Button>
              <Button btnStyle='link' icon>
                <Icon icon="moon" />
              </Button>
            </div>
          </section> */}
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
