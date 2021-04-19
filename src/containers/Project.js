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

// const ProjectDescription = ({ title, text }) => (
//   <div className="project__header--text">
//     <p>{title}</p>
//     <p>{text}</p>
//   </div>
// );

const Project = () => {
  let { projectId } = useParams();

  const project = PROJECTS && PROJECTS.find((p) => p.id === projectId);

  if (project) {
    return (
      <section className="project">
        {project.hidden && (
          <div className="project__section text-center">
            <h2>Under Construction</h2>
            <p>
              Seems like you wondered into this page that is under construction.
              Feel free to explore around, but please excuse the mess. and if
              you have any feedback, send it over! Always appreciate it!
            </p>
          </div>
        )}
        {/* <div className="project__header">
          <h2>{project.title}</h2>
          {project.summary.map((sum) => (
            <ProjectDescription
              title={Object.keys(sum)[0]}
              text={Object.values(sum)[0]}
            />
          ))}
          <p>{project.description}</p>
        </div> */}
        {project.content}
      </section>
    );
  } else return <FourOhFour />;
};

export default Project;
