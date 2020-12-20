import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

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
    const { location, isDarkTheme } = this.props;
    const currentPath = location && location.pathname;

    return (
      <React.Fragment>
        <header
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
            <nav className="main-header__nav">
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
