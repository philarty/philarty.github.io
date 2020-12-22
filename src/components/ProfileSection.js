
import React from "react";
import { Link } from "react-router-dom";
import Button from './Button'

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
      Here is a little paragraph about myself, I'm not 100% what to put in here
      yet, but if you are reading this, feel free to send me a message about why
      you think im hirable. it would probably be around four to five lines, so
      which is the length of this little snippet. Thanks for your input!
    </p>
  </div>
);

export default ProfileSection;
