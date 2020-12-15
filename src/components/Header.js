import React from "react";
import { Link } from "react-router-dom";

const  Header = () => {
  return (
    <header className="main-header">
      <nav className="main-header__logo">
        <Link to="/">Philarty</Link>
      </nav>
      <nav className="main-header__links">
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header
