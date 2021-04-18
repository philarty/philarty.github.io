import React from "react";
import Lightbox from "../components/Lighbox";
import spooningSpoonPoster from "../images/spooning-spoon/spooning-spoon-poster.jpg";
import spooningSpoonDefinition from "../images/spooning-spoon/spooning-spoon-definition.png";
import spooningSpoonProcess from "../images/spooning-spoon/spooning-spoon-process.png";
import spooningSpoonCover from "../images/spooning-spoon/spooning-spoon-cover.jpg";
import spooningSpoonPhil from "../images/spooning-spoon/spooning-spoon-phil.jpg";

const SpooningSpoon = (
  <div className="project__body">
    <div className="project__section spooning-spoon__poster">
      <Lightbox>
        <img src={spooningSpoonPoster} alt="" />
      </Lightbox>
    </div>
    <div className="project__section spooning-spoon__definition">
      <Lightbox>
        <img src={spooningSpoonDefinition} alt="" />
      </Lightbox>
      <ol>
        <h3>
          Spoon <span className="text-muted">/spo͞on/</span>
        </h3>

        <h4>noun</h4>
        <li>
          An implement consisting of a small, shallow oval or round bowl on a
          long handle, used for eating, stirring, and serving food.
        </li>
        <h4>verb</h4>
        <li>
          (of two people) lie close together sideways and front to back with
          bent knees, so as to fit together like spoons.
        </li>
      </ol>
    </div>
    <div className="project__section">
      <Lightbox>
        <img src={spooningSpoonProcess} alt="" />
      </Lightbox>
    </div>
    <div className="project__section">
      <Lightbox>
        <img src={spooningSpoonCover} alt="" />
      </Lightbox>
    </div>
    <div className="project__section">
      <Lightbox>
        <img src={spooningSpoonPhil} alt="" />
      </Lightbox>
    </div>
  </div>
);

export default SpooningSpoon;
