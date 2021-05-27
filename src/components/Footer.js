import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Link to="/" className="footer__logo">
          &copy; Philarty 2018-2021
        </Link>
        <div className="footer__social">
          <Link to="/" className="footer__logo">
            Portfolio
          </Link>
          <a href="https://www.instagram.com/philarty/">Instagram</a>
          <a href="https://www.linkedin.com/in/philiplaudesign/">linkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
