import React from "react";
import { Link } from "react-router-dom";

import profileImage from "../images/about-me/HeadShot.jpg";

const ProfileSection = () => (
  <div className="profile">
    <img src={profileImage} alt="Profile" />
    <h1>Hi. It's Phil!</h1>
    <h2 className="h1">
      I <Link to="/projects/design">Design</Link>,{" "}
      <Link to="/projects/code">Code</Link>, &{" "}
      <Link to="/projects/make">Make</Link> Stuff
    </h2>
    <p>
      I'm based in San Francisco, California and I focus on building usable and
      visually captivating digital products that has an impact on people.
      <br />
      Currently, I'm a UI/UX Engineer at{" "}
      <a href="http://www.moesif.com" target="_blank" rel="noreferrer">
        Moesif
      </a>
      , the leading API analytics company.
    </p>
  </div>
);

export default ProfileSection;
