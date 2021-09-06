import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const FourOhFour = () => {
  const [photo, setPhoto] = useState();
  function handleUpdatePhoto() {
    axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
      setPhoto(res.data[0].url);
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
      <div>
        <Button onClick={() => handleUpdatePhoto()}>I want more catness</Button>
        <Link to="/" className="btn btn-lg btn-solid-green">
          Go back to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default FourOhFour;
