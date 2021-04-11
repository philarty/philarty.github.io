import React from "react";
import SVG from "react-inlinesvg";

import iconHeader from "../images/iconography/icon-main.svg";

import sunnyIcon from "../images/iconography/sunny.svg";
import sunnyPeriodsIcon from "../images/iconography/sunny-periods.svg";
import sunnyIntervalIcon from "../images/iconography/sunny-intervals.svg";
import sunnyPeriodsWithShowersIcon from "../images/iconography/sunny-periods-with-showers.svg";
import sunnyIntervalsWithShowersIcon from "../images/iconography/sunny-intervals-with-showers.svg";
import fogIcon from "../images/iconography/fog.svg";
import cloudyIcon from "../images/iconography/cloudy.svg";
import overcastIcon from "../images/iconography/overcast.svg";
import lightRainIcon from "../images/iconography/light-rain.svg";
import heavyRainIcon from "../images/iconography/heavy-rain.svg";
import thunderstormIcon from "../images/iconography/thunderstorm.svg";
import windyIcon from "../images/iconography/windy.svg";
import hotIcon from "../images/iconography/hot.svg";
import warmIcon from "../images/iconography/warm.svg";
import coolIcon from "../images/iconography/cool.svg";
import coldIcon from "../images/iconography/cold.svg";

import carIcon from "../images/iconography/car.svg";
import taxiIcon from "../images/iconography/taxi.svg";
import miniBusIcon from "../images/iconography/mini-bus.svg";
import busIcon from "../images/iconography/bus.svg";
import mtrIcon from "../images/iconography/mtr.svg";
import flightIcon from "../images/iconography/flight.svg";
import peakTramIcon from "../images/iconography/peak-tram.svg";
import tramIcon from "../images/iconography/tram.svg";
import cableCarIcon from "../images/iconography/cable-car.svg";
import ferryIcon from "../images/iconography/ferry.svg";
import walkingIcon from "../images/iconography/walking.svg";
import bikingIcon from "../images/iconography/biking.svg";

import homeIcon from "../images/iconography/home.svg";
import schoolIcon from "../images/iconography/school.svg";
import libraryIcon from "../images/iconography/library.svg";
import workIcon from "../images/iconography/work.svg";
import transitIcon from "../images/iconography/transit.svg";
import urbanIcon from "../images/iconography/urban.svg";
import suburbanIcon from "../images/iconography/suburban.svg";
import natureIcon from "../images/iconography/nature.svg";
import outdoorIcon from "../images/iconography/outdoor.svg";
import indoorIcon from "../images/iconography/indoor.svg";

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
      // { id: "Humid", src: coldIcon },
      // { id: "Dry", src: coldIcon },
    ],
    // description:
    //   "This set of icons are designed for usage in the PRAISE HK app",
  },
  {
    title: "Transit Icons",
    icons: [
      { id: "Car", src: carIcon },
      { id: "Taxi", src: taxiIcon },
      { id: "Mini Bus", src: miniBusIcon },
      { id: "Bus", src: busIcon },
      { id: "MTR", src: mtrIcon },
      { id: "Flight", src: flightIcon },
      { id: "Peak Tram", src: peakTramIcon },
      { id: "Tram", src: tramIcon },
      { id: "Cable Car", src: cableCarIcon },
      { id: "Ferry", src: ferryIcon },
      { id: "Walking", src: walkingIcon },
      { id: "Biking", src: bikingIcon },
    ],
  },
  {
    title: "Location Icons",
    icons: [
      { id: "Home", src: homeIcon },
      { id: "School", src: schoolIcon },
      { id: "Library", src: libraryIcon },
      { id: "Work", src: workIcon },
      { id: "Transit", src: transitIcon },
      { id: "Urban", src: urbanIcon },
      { id: "Suburban", src: suburbanIcon },
      { id: "Nature", src: natureIcon },
      { id: "Outdoor", src: outdoorIcon },
      { id: "Indoor", src: indoorIcon },
    ],
  },
  // {
  //   title: "App Icons",
  //   icons: [
  //     { id: "Sunny", src: sunnyIcon },
  //     { id: "S3nny", src: sunnyIcon },
  //   ],
  // },
];

const IconItem = ({ id, iconSrc }) => {
  return (
    <div className="iconography-grid__icon">
      <SVG src={iconSrc} className="icon" />
      <p>{id}</p>
    </div>
  );
};

const IconGrid = ({ title, icons, description }) => {
  return (
    <div className="project__section">
      <div className="iconography-grid">
        <h3>{title}</h3>

        {icons.map((icon) => (
          <IconItem key={icon.id} id={icon.id} iconSrc={icon.src} />
        ))}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

const Iconography = (
  <div className="project__body">
    <div className="project__section iconography-header">
      <SVG src={iconHeader} alt="icon" />
      <div className="text">
        <p>
          Icons are simple images used in context to communicate. They are
          easily recognizable and memorable. It has become an essential language
          for navigation through life, both in the real world and on electronic
          devices.
        </p>
        <p>
          This series of icons are designed to be used for mobile applications.
          Most of these icons draw inspiration from pre-existing ones, while a
          few are new and unique to this application. Following Google's
          Material Design Principle, the use of a 24 x 24 pixel grid ensures the
          icon aligns with display pixels on a mobile device. Minimum stroke
          weight of 2px for both positive and negative space to ensure
          legibility on a small screen. The consistent treatment also unifies
          them into a single set, allowing them to look cohesive existing in the
          same page.
        </p>
      </div>
    </div>
    {ICONSSETS.map((set) => (
      <IconGrid
        key={set.title}
        title={set.title}
        icons={set.icons}
        description={set.description}
      />
    ))}
  </div>
);

export default Iconography;
