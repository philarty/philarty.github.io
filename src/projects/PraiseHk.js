import React from "react";
import praiseImage1 from "../images/praise-hk/paise-hk-1.png";
import praiseImage2 from "../images/praise-hk/paise-hk-2.png";
import praiseImage3 from "../images/praise-hk/paise-hk-3.png";
import praiseImage4 from "../images/praise-hk/paise-hk-4.png";
import praiseImage5 from "../images/praise-hk/paise-hk-5.png";
import praiseImage6 from "../images/praise-hk/paise-hk-6.png";
import praiseImage7 from "../images/praise-hk/paise-hk-7.png";
import praiseImage8 from "../images/praise-hk/paise-hk-8.png";
import praiseImage9 from "../images/praise-hk/paise-hk-9.png";
import praiseImage10 from "../images/praise-hk/paise-hk-10.png";
import praiseImage11 from "../images/praise-hk/paise-hk-11.png";
import praiseImage12 from "../images/praise-hk/paise-hk-12.png";
import praiseImage13 from "../images/praise-hk/paise-hk-13.png";
import praiseImage14 from "../images/praise-hk/paise-hk-14.png";
import praiseImage15 from "../images/praise-hk/paise-hk-15.png";
import praiseImage16 from "../images/praise-hk/paise-hk-16.png";

const STATICIMAGES = [
  { src: praiseImage1, alt: "Banner" },
  { src: praiseImage2, alt: "Project background" },
  { src: praiseImage3, alt: "Project manager quote" },
  { src: praiseImage4, alt: "Air Quality Health Index indicator" },
  { src: praiseImage5, alt: "User Profiles" },
  { src: praiseImage6, alt: "Typography" },
  { src: praiseImage7, alt: "Home Screen" },
  { src: praiseImage8, alt: "Forecast + Health Advisory" },
  { src: praiseImage9, alt: "Map View" },
  { src: praiseImage10, alt: "Bookmark Overview" },
  { src: praiseImage11, alt: "Work in progress" },
  { src: praiseImage12, alt: "My Health" },
  { src: praiseImage13, alt: "Timeline View" },
  { src: praiseImage14, alt: "Symptom Report" },
  { src: praiseImage15, alt: "Wirefream 1" },
  { src: praiseImage16, alt: "Wireframe 2" },
];

const PraiseHk = (
  <div className="project__body">
    <div className="project__section praise-hk">
      {STATICIMAGES.map((image) => (
        <img src={image.src} alt={image.alt} />
      ))}
    </div>
  </div>
);

export default PraiseHk;
