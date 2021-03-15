import React from "react";
import Icon from "../components/Icon";

import sunnyIcon from "../images/icons/sunny.svg";
import sunnyPeriodsIcon from "../images/icons/sunny-periods.svg";
import sunnyIntervalIcon from "../images/icons/sunny-intervals.svg";
import sunnyPeriodsWithShowersIcon from "../images/icons/sunny-periods-with-showers.svg";
import sunnyIntervalsWithShowersIcon from "../images/icons/sunny-intervals-with-showers.svg";
import fogIcon from "../images/icons/fog.svg";
import cloudyIcon from "../images/icons/cloudy.svg";
import overcastIcon from "../images/icons/overcast.svg";
import lightRainIcon from "../images/icons/light-rain.svg";
import heavyRainIcon from "../images/icons/heavy-rain.svg";
import thunderstormIcon from "../images/icons/thunderstorm.svg";
import windyIcon from "../images/icons/windy.svg";
import hotIcon from "../images/icons/hot.svg";
import warmIcon from "../images/icons/warm.svg";
import coolIcon from "../images/icons/cool.svg";
import coldIcon from "../images/icons/cold.svg";

const ICONSSETS = [
  {
    title: "Weather Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny Periods", src: sunnyPeriodsIcon },
      { id: "Sunny Intervals", src: sunnyIntervalIcon },
      { id: "Sunny Periods with Showers", src: sunnyPeriodsWithShowersIcon },
      {
        id: "Sunny Intervals with Showers",
        src: sunnyIntervalsWithShowersIcon,
      },
      { id: "Fog", src: fogIcon },
      { id: "Cloudy", src: cloudyIcon },
      { id: "Overcast", src: overcastIcon },
      { id: "Light Rain", src: lightRainIcon },
      { id: "Heavy Rain", src: heavyRainIcon },
      { id: "Thunderstorms", src: thunderstormIcon },
      { id: "Windy", src: windyIcon },
      { id: "Hot", src: hotIcon },
      { id: "Warm", src: warmIcon },
      { id: "Cool", src: coolIcon },
      { id: "Cold", src: coldIcon },
    ],
  },
  {
    title: "Transit Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Su2nny", src: sunnyIcon },
    ],
  },
  {
    title: "Location Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sun2ny", src: sunnyIcon },
    ],
  },
  {
    title: "App Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "S3nny", src: sunnyIcon },
    ],
  },
];

const IconItem = ({ id, iconSrc }) => {
  return (
    <div className="icon-item">
      <Icon src={iconSrc} />
      <p>{id}</p>
    </div>
  );
};

const IconGrid = ({ title, icons }) => {
  return (
    <div className="icon-grid">
      <h3>{title}</h3>
      <div>
        {icons.map((icon) => (
          <IconItem key={icon.id} id={icon.id} iconSrc={icon.src} />
        ))}
      </div>
    </div>
  );
};

const IconsProject = (
  <div className="project__body">
    <div>
      <div>
        <p>
          Icons are simple images used in context to communicate something. They
          are easily recognizable and easy to remember. It has become an
          essential language for how we navigate through life both in the real
          world and on electronic devices.
        </p>
        <p>
          This series of icons are designed to be used for mobile applications.
          Most of these icons draw inspiration from pre-existing ones, while a
          few are new and unique to this application. The use of a 24 x 24 pixel
          grid ensures the icon aligns with with display pixels on a mobile
          device. Minimum stroke weight of 2px for both positive and negative
          space to ensure legibility on a small screen. The consistent treatment
          also unifies them into a single set, allowing them to look cohesive
          existing in the same page.
        </p>
      </div>
    </div>
    <div className="project__body">
      {ICONSSETS.map((set) => (
        <IconGrid key={set.title} title={set.title} icons={set.icons} />
      ))}
    </div>
  </div>
);

export default IconsProject;
