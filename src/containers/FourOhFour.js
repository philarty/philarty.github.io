import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <section className="404">
      <h1>AIYA</h1>
      <h3>Seems like you are lost.</h3>
      <Link to="/">
        <h3>Lets head home</h3>
      </Link>
    </section>
  );
};

export default FourOhFour;
