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
      expandedMenu: false,
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ expandedMenu: false });
    }
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY > 0 });
  };

  render() {
    const { scroll, expandedMenu } = this.state;
    const { location, isDarkTheme } = this.props;
    const currentPath = location && location.pathname;

    return (
      <React.Fragment>
        <header
          ref={this.setWrapperRef}
          className={
            "main-header" +
            (scroll || expandedMenu ? " main-header--scroll" : "")
          }
        >
          <div className="main-header__wrapper">
            <Button
              onClick={() => this.setState({ expandedMenu: !expandedMenu })}
              icon
              btnStyle="link"
              className="main-header__mobile-nav-button"
            >
              <Icon icon="menu" />
            </Button>
            <Link
              className="main-header__logo"
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
                this.setState({ expandedMenu: false });
              }}
            >
              Philarty
            </Link>
            <nav className="main-header__desktop-nav">
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
              <Button onClick={this.props.onToggleTheme} btnStyle="link" icon>
                <Icon icon={isDarkTheme ? "sun" : "moon"} />
              </Button>
            </nav>
          </div>

          {/* dropdown Menu for mobile */}
          <nav
            className={
              "main-header__mobile-nav " +
              (expandedMenu ? " main-header__mobile-nav--show" : "")
            }
          >
            {NAV.map((link) => (
              <Link
                key={link.text}
                to={link.url}
                className={currentPath.includes(link.url) ? "active" : ""}
                onClick={() => {
                  this.setState({ expandedMenu: false });
                  window.scrollTo(0, 0);
                }}
              >
                {link.text}
              </Link>
            ))}
          </nav>
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
