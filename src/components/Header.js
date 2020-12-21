import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";

const NAV = [
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Aiya",
    url: "/404",
  },
];

//wrapping HeaderInner to pass location,
// since cannot use useLocation in class Component.

class HeaderInner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
      showDropdownMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY > 0 });
  };

  handleToggleDropdown = () => {
    this.setState({ showDropdownMenu: !this.state.showDropdownMenu });
  };

  render() {
    const { scroll, showDropdownMenu } = this.state;
    const { location, isDarkTheme } = this.props;
    const currentPath = location && location.pathname;

    return (
      <React.Fragment>
        <header
          className={
            "main-header" +
            (scroll || showDropdownMenu ? " main-header--scroll" : "")
          }
        >
          <div className="main-header__wrapper">
            <Button
              onClick={this.handleToggleDropdown}
              icon
              btnStyle="link"
              className="main-header__mobile-nav-button"
            >
              <Icon icon="sun" />
            </Button>
            <Link
              className="main-header__logo"
              to="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              Philarty
            </Link>
            <nav className="main-header__nav--desktop">
              {NAV.map((link) => (
                <Link
                  key={link.text}
                  to={link.url}
                  className={currentPath.includes(link.url) ? "active" : ""}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.text}
                </Link>
              ))}
              <Button
                onClick={() => this.props.onToggleTheme()}
                btnSize="sm"
                btnStyle="outline"
                icon
              >
                <Icon icon={isDarkTheme ? "sun" : "moon"} />
              </Button>
            </nav>
          </div>

          {/* dropdown Menu for mobile */}
          {showDropdownMenu && (
            <nav className="main-header__nav--mobile">
              {NAV.map((link) => (
                <Link
                  key={link.text}
                  to={link.url}
                  className={currentPath.includes(link.url) ? "active" : ""}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          )}
        </header>

        <div className="header__pseudo" />
      </React.Fragment>
    );
  }
}

//wrapping HeaderInner to pass location,
// since cannot use useLocation in class Component.

function Header(props) {
  const location = useLocation();
  const { ...rest } = props;

  return <HeaderInner location={location} {...rest} />;
}

export default Header;
