import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="main-header">
    <div className="main-header__wrapper">
      <Link className="main-header__logo" to="/">
        Philarty
      </Link>
      <nav className="main-header__links">
        <Link to="/about">About</Link>
        <Link to="/">Projects</Link>
      </nav>
    </div>
  </header>
);

export default Header;
