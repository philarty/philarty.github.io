import SpooningSpoon from "./SpooningSpoon";
import Iconography from "./Iconography";
import PraiseHk from "./PraiseHk";
import DailyUI from "./DailyUI";
import PortfolioDocs from "./PortfolioDocs";
import MoesifBrandSystem from "./MoesifBrandSystem";
import MoesifWebsiteDesign from "./MoesifWebsiteDesign";
import MoesifIllustration from "./MoesifIllustration";

import IconographyCover from "../images/iconography/iconography-cover.svg";
import spooningSpoonCover from "../images/spooning-spoon/spooning-spoon-cover.jpg";
import praiseHkCover from "../images/praise-hk/praise-hk-cover.png";
import PortfolioDocsCover from "../images/portfolio-docs/portfolio-docs-cover.png";
import moesifWebsiteDesignCover from "../images/moesif-website-design/website-cover.png";


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
    title: "Spooning Spoon",
    id: "spooning-spoon",
    description:
      "Exploration of solitude in space through a Human Sized Spoon ",
    previewSrc: spooningSpoonCover,
    tags: ["design", "make"],
    content: SpooningSpoon,
  },
  {
    title: "Portfolio Docs",
    id: "portfolio-docs",
    description: "This portoflio is built on React components. Check out the documentation for all of them.",
    previewSrc: PortfolioDocsCover,
    tags: ["design", "make"],
    content: PortfolioDocs,
  },
  {
    title: "Moesif Brand System",
    id: "moesif-brand-system",
    description:
      "Create a digitial identity for Moesif, most advanced API Analytics service helping everyone at API-driven organizations learn from their API data and make smarter decisions that drive growth. ",
    // previewSrc: IconographyCover,
    tags: ["design"],
    content: MoesifBrandSystem,
    hidden: true, //*** || TO DO || ***//
  },
  {
    title: "Moesif Web Deisgn",
    id: "moesif-web-design",
    description:
      "Create a digitial identity for Moesif, most advanced API Analytics service helping everyone at API-driven organizations learn from their API data and make smarter decisions that drive growth. ",
    previewSrc: moesifWebsiteDesignCover,
    tags: ["design"],
    content: MoesifWebsiteDesign,
    hidden: true, //*** || TO DO || ***//
  },
  {
    title: "Moesif Illustration",
    id: "moesif-illustration",
    description:
      "Create a digitial identity for Moesif, most advanced API Analytics service helping everyone at API-driven organizations learn from their API data and make smarter decisions that drive growth. ",
    // previewSrc: IconographyCover,
    tags: ["design"],
    content: MoesifIllustration,
    hidden: true, //*** || TO DO || ***//
  },
  {
    title: "Daily UI",
    id: "daily-ui",
    description: "Daily UI",
    // previewSrc: spooningSpoonCover,
    tags: ["design"],
    content: DailyUI,
    hidden: true, //*** || TO DO || ***//
  },
];

export default PROJECTS;
