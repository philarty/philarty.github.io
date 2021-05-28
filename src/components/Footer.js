import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          &copy; Philarty 2018-2021
        </div>
        <div className="footer__social">
          <Button to="/" btnStyle="link" btnColor="primary">
            Portfolio
          </Button>
          <Button
            href="https://www.instagram.com/philarty/"
            btnStyle="link"
            btnColor="primary"
          >
            Instagram
          </Button>
          <Button
            href="https://www.linkedin.com/in/philiplaudesign/"
            btnStyle="link"
            btnColor="primary"
          >
            linkedIn
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
