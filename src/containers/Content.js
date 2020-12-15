import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className='content'>
      <p>Eventually ccontent will go here</p>
      <Link to="/about">Check out my About Page</Link> 
    </div>
  );
};

export default Content;
