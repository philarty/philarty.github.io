import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY > 0 });
  };

  render() {
    const { scroll } = this.state;
    return (
      <React.Fragment>
        <header
          style={{ transition: scroll ? "all 0.25s ease-in-out" : "" }}
          className={"main-header" + (scroll ? " main-header--scroll" : "")}
        >
          <div className="main-header__wrapper">
            <Link
              className="main-header__logo"
              to="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              Philarty
            </Link>
            <nav className="main-header__links">
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                About
              </Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                Projects
              </Link>
            </nav>
          </div>
        </header>

        <div className="pseudo-header" />
      </React.Fragment>
    );
  }
}

export default Header;
