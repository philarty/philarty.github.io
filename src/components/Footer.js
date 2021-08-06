import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
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
        &copy; Philip Lau
      </div>
    </footer>
  );
};

export default Footer;
