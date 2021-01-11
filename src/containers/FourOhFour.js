import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <section className="four-oh-four">
      <h1>AIYA</h1>
      <h3>Seems like you are lost.</h3>
      <img src='https://source.unsplash.com/600x600?cute-animals' alt='Cute Animals' />
      <p>here are some cute animals for your troubles</p>
      <div>
      <a href='http://philarty.io/#/404' className='btn btn-lg btn-solid-red' >
        I want more cutness
      </a>
      <Link to="/" className='btn btn-lg btn-solid-green'>
        Go back to Portfolio
      </Link>

      </div>
    </section>
  );
};
 
export default FourOhFour;
