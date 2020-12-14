import React from 'react'
import "./css/agile.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
