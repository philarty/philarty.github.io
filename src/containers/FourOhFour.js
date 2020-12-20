import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <section className="four-oh-four">
      <h1>AIYA</h1>
      <h3>Seems like you are lost.</h3>
      <Link to="/" className='btn btn-lg btn-solid-red'>
        Lets head home
      </Link>
    </section>
  );
};

export default FourOhFour;
