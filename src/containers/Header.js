import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main-header">
        <div className="main-header__wrapper">
          <Link className="main-header__logo" to="/">
            Philarty
          </Link>
          <nav className="main-header__links">
            <Link to="/about">About</Link>
            <Link to="/about">About</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
