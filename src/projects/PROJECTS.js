import SpooningSpoon from "./SpooningSpoon";
import Iconography from "./Iconography";
import PraiseHk from './PraiseHk'
import DailyUI from './DailyUI'

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
    description: "Develop a smart city mobile app empowering users to better manage and control their exposure to air pollutants.",
    previewSrc: praiseHkCover,
    tags: ["design"],
    content: PraiseHk,
  },
  // {
  //   title: "Daily UI",
  //   id: "daily-ui",
  //   description: "Human Sized Spoon ",
  //   previewSrc: spooningSpoonCover,
  //   tags: ["design", "make"],
  //   content: DailyUI,
  // },
  {
    title: "Spooning Spoon",
    id: "spooning-spoon",
    description: "Human Sized Spoon ",
    previewSrc: spooningSpoonCover,
    tags: ["design", "make"],
    content: SpooningSpoon,
  },
  // {
  //   title: "Make Project",
  //   id: "test3",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
  //   previewSrc: "https://picsum.photos/seed/3/500/300",
  //   tags: ["make"],
  // },
  // {
  //   title: "Design Project 2",
  //   id: "test4",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
  //   previewSrc: "https://picsum.photos/seed/4/500/300",
  //   tags: ["design", "make"],
  // },
  // {
  //   title: "Code Project 3",
  //   id: "test5",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
  //   previewSrc: "https://picsum.photos/seed/5/500/300",
  //   tags: ["code", "design"],
  // },
  // {
  //   title: "Make Project2",
  //   id: "test6",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
  //   previewSrc: "https://picsum.photos/seed/6/500/300",
  //   tags: ["make", "code"],
  // },
];

export default PROJECTS;
