import SpooningSpoon from "./SpooningSpoon";
import Iconography from "./Iconography";
import spooningSpoonCover from "../images/spooning-spoon/cover.jpg";

const PROJECTS = [
  {
    title: "Iconography",
    id: "iconography",
    description:
      "Designing custom icon sets to be used in mobile applications",
    previewSrc: "https://picsum.photos/seed/2/500/300",
    summary: [
      { 'tools': "Illustrator, Photoshop" },
      { 'skills': "Graphic Design" },
      { 'time': "3 months" },
      { 'role': "Graphic Design" },
      { 'projects': 'ho'}
    ],
    tags: ["design"],
    content: Iconography,
  },
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
