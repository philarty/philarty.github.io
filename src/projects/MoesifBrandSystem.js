import React, { useState } from "react";

import Lightbox from "../components/Lighbox";

import logoSketch from "../images/moesif-brand-system/logo-sketches.png";

const LogoSection = () => {
  return (
    <div className="project__section">
      <Lightbox>
        <img src={logoSketch} alt="" />
      </Lightbox>
    </div>
  );
};
const MoesifBranding = (
  <div className="project__body moesif-branding">
    <p>
      As the world continue to grow to be more interconnected, APIs allow
      different applicatioins to communicate with one other, snding requests and
      responses. Moesif provides the most advanced API Analytics service helping
      everyone at API-driven organizations learn from their API data and make
      smarter decisions that drive growth. Thousands of customer-driven teams
      use Moesif to really understand how their customers and partners use their
      APIs and to automate the debugging of customer issues.
    </p>
    <LogoSection />
  </div>
);

export default MoesifBranding;
