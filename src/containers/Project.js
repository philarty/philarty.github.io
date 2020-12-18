import React from "react";
import { useParams } from "react-router-dom";


// useParams here to pull from url /portfolio#/projects/:projectName
const Project = () => {
  let { projectName } = useParams();

  if (projectName === "test1") {
    return (
      <section className="project">
        <div>{projectName}</div>
        <div>This is a functional page for {projectName} </div>
      </section>
    );
  }
};

export default Project;
