import React from "react";
import { useParams } from "react-router-dom";

import PROJECTS from "../projects/PROJECTS.js";
import FourOhFour from "./FourOhFour.js";

// useParams here to pull from url /portfolio#/projects/:projectId

// project Object Shape // 2020 12 22
// {
//   title: "Make Project",
//   description:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",
//   imageSrc: "https://picsum.photos/seed/3/500/300",
//   tags: ["make"],
//   id: "test3",
// },

const Project = () => {
  let { projectId } = useParams();

  const project = PROJECTS.find((p) => p.id === projectId);

  if (project) {
    return (
      <section className="project">
        <div className="project__header">
          <div>{project.title}</div>
          <img className='project__header-image' src={project.imageSrc} alt={project.title} />
        </div>
        {project.content}
      </section>
    );
  } else return <FourOhFour />;
};

export default Project;
