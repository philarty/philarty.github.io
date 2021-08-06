import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import PROJECTS from "../projects/PROJECTS.js";
import FourOhFour from "./FourOhFour.js";
import Button from "../components/Button";

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

const ProjectHeader = (props) => {
  const { project } = props;
  const [show, setShow] = useState(false);

  return (
    <div className="project-header">
      <div className="project-header__tags">
        {project.tags.map((tag) => (
          <Button
            to={"/projects/" + tag}
            key={tag}
            onClick={() => window.scrollTo(0, 0)}
            btnSize="sm"
            btnStyle="outline"
            btnColor="gray"
          >
            {tag}
          </Button>
        ))}
      </div>
      <h2 className="project-header__title">{project.title}</h2>

      <p>Illustration</p>
      <p>Client: Moesif, Praise HK, Portfolio</p>
      <p> Date: 2019-present</p>

      <p>{project.description}</p>
      <Button
        onClick={() => (show ? setShow(false) : setShow(true))}
        btnSize="sm"
      >
        {show ? "Hide" : "Show All"}
      </Button>

      {show && <div> hi</div>}
    </div>
  );
};

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
        {project.content}
      </section>
    );
  } else return <FourOhFour />;
};

export default Project;
