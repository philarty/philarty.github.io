import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const FourOhFour = () => {
  const [photo, setPhoto] = useState();
  function handleUpdatePhoto() {
    axios.get("https://randomfox.ca/floof").then((res) => {
      setPhoto(res.data.image);
    });
  }
  useEffect(() => handleUpdatePhoto(), []);

  return (
    <section className="four-oh-four">
      <h1>AIYA</h1>
      <h3>Seems like you are lost.</h3>
      <img
        src={photo}
        alt="Cute Animals"
      />
      <p>here are some cute animals for your troubles</p>
      <div>
        <Button onClick={() => handleUpdatePhoto()}>I want more cutness</Button>
        <Link to="/" className="btn btn-lg btn-solid-green">
          Go back to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default FourOhFour;
