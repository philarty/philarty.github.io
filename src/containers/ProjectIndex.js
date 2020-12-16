import React from "react";
import { Link } from "react-router-dom";

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
];

const ProjectPreview = (props) => {
  const { project } = props;
  return (
    <div className="project-preview">
      <h3>{project.title}</h3>
      <img src={project.imageSrc} alt={project.title} />
      <p>{project.description}</p>
      <div>
        Project tags:
        {project.tags.map((tag) => (
          <span> {tag}</span>
        ))}
      </div>
    </div>
  );
};

function ProjectIndex(props) {
  const { history } = props;

  //get pathname
  const pathname = history && history.location && history.location.pathname;

  //remove slash
  const selectedTag = pathname.replace(/^\/|/g, "");

  //find projects that contian tag
  const selectedProjects = selectedTag
    ? PROJECTS.filter((p) => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <section className="project-index">
      <h1>These are my {selectedTag} projects.</h1>
      {selectedProjects.map((project) => (
        <ProjectPreview project={project} />
      ))}
    </section>
  );
}

export default ProjectIndex;
