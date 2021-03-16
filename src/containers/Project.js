import React from "react";
import { useParams } from "react-router-dom";

import PROJECTS from "../projects/PROJECTS.js";
import FourOhFour from "./FourOhFour.js";

// useParams here to pull from url /portfolio#/projects/:projectId

// project Object Shape // 2020 12 22
// {
//   title: "Spooning Spoon",
//   id: "spooning-spoon",
//   description: "Human Sized Spoon ",
//   previewSrc: spooningSpoonCover,
//   tags: ["design", "make"],
//   content: SpooningSpoon,
// },

const Project = () => {
  let { projectId } = useParams();

  const project = PROJECTS && PROJECTS.find((p) => p.id === projectId);

  if (project) {
    return (
      <section className="project">
        <div className="project__header">
          {project.previewSrc && (
            <img
              className="project__header--image"
              src={project.previewSrc}
              alt={project.title}
            />
          )}
          <div className="project__header--text">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
        {project.content}
      </section>
    );
  } else return <FourOhFour />;
};

export default Project;
