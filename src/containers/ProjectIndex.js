import React from "react";
import { useLocation } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview.js";

const PROJECTS = [
  {
    title: "Design Project",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
    imageSrc: "https://picsum.photos/500/300",
    tags: ["design"],
    url: "test1",
  },
  {
    title: "Code Project",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
    imageSrc: "https://picsum.photos/500/300",
    tags: ["code"],
    url: "test2",
  },
  {
    title: "Make Project",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
    imageSrc: "https://picsum.photos/500/300",
    tags: ["make"],
    url: "test3",
  },
  {
    title: "Design Project 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
    imageSrc: "https://picsum.photos/500/300",
    tags: ["design", "make"],
    url: "test1",
  },
  {
    title: "Code Project 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
    imageSrc: "https://picsum.photos/500/300",
    tags: ["code", "design"],
    url: "test2",
  },
  {
    title: "Make Project2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
    imageSrc: "https://picsum.photos/500/300",
    tags: ["make", "code"],
    url: "test3",
  },
];

function ProjectIndex() {
  const location = useLocation();

  //get pathname
  const pathname = location && location.pathname;

  //remove slash
  const selectedTag = pathname.replace(/^\/|/g, "");

  //find projects that contian tag
  const selectedProjects = selectedTag
    ? PROJECTS.filter((p) => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <section className="project-index">
      <h1 className='project-index__title'>
      {selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)}
      </h1>
      <div className="project-index__grid">
        {selectedProjects.map((project) => (
          <ProjectPreview project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default ProjectIndex;
