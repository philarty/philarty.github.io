import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <Button to="/" btnStyle="link" btnColor="primary" target="_blank">
          Portfolio
        </Button>
        <Button
          href="https://www.instagram.com/philarty/"
          btnStyle="link"
          btnColor="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Button>
        <Button
          href="https://www.linkedin.com/in/philiplaudesign/"
          btnStyle="link"
          btnColor="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </Button>
        <Button
          href="https://github.com/philarty"
          btnStyle="link"
          btnColor="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Button>
      </div>
      <div className="footer__disclaimer">
        &copy; 2021 All rights reserved by Philip Lau
      </div>
    </footer>
  );
};

export default Footer;
