import SpooningSpoon from "./SpooningSpoon";
import Iconography from "./Iconography";
import PraiseHk from "./PraiseHk";
import DailyUI from "./DailyUI";
import PortfolioDocs from "./PortfolioDocs";

import IconographyCover from "../images/iconography/iconography-cover.svg";
import spooningSpoonCover from "../images/spooning-spoon/spooning-spoon-cover.jpg";
import praiseHkCover from "../images/praise-hk/praise-hk-cover.png";

const PROJECTS = [
  {
    title: "Iconography",
    id: "iconography",
    description:
      "Custom icons sets used in a variety of settings and applications.",
    previewSrc: IconographyCover,
    tags: ["design"],
    content: Iconography,
  },
  {
    title: "Praise HK",
    id: "praise-hk",
    description:
      "Develop a smart city mobile app empowering users to better manage and control their exposure to air pollutants.",
    previewSrc: praiseHkCover,
    tags: ["design"],
    content: PraiseHk,
  },
  {
    title: "Daily UI",
    id: "daily-ui",
    description: "Human Sized Spoon ",
    previewSrc: spooningSpoonCover,
    tags: ["design"],
    content: DailyUI,
    hidden: true, //*** || TO DO || ***//
  },
  {
    title: "Spooning Spoon",
    id: "spooning-spoon",
    description: "Exploration of solitude in space through a Human Sized Spoon ",
    previewSrc: spooningSpoonCover,
    tags: ["design", "make"],
    content: SpooningSpoon,
  },
  {
    title: "Portfolio Docs",
    id: "portfolio-docs",
    description:
      "Documentation of custom built portfolio components used.",
    previewSrc: IconographyCover,
    tags: ["design", "make"],
    content: Portfolio,
    hidden: true, //*** || TO DO || ***//
  }
];

export default PROJECTS;
