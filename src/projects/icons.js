import React from "react";

import sunnyIcon from "../images/icons.svg";

const PROJECTS = [
  {
    title: "Weather Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
    ],
  },
  {
    title: "Transit Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
    ],
  },
  {
    title: "Location Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
    ],
  },
  {
    title: "App Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny", src: sunnyIcon },
    ],
  },
];

const Icon = ({ id, iconSrc }) => {
  <div>
    <p>{id}</p>
  </div>;
};

const IconGrid = ({ title, icons }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {icons.map((icon) => (
          <Icon id={icon.id} iconSrc={icon.src} />
        ))}
      </div>
    </div>
  );
};

const SpooningSpoon = (
  <div className="project__body">
    <div>
      <div>Icons</div>
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
    {ICONSSETS.map((set) => (
      <IconGrid title={set.title} icons={set.icons} />
    ))}
  </div>
);

export default SpooningSpoon;
