import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectPreview = (props) => {
  const { project } = props;
  return (
    <div
      className={
        "project-preview" +
        (!project.previewSrc ? " project-preview--under-construction" : "")
      }
    >
      <Link to={"/project/" + project.id} className="project-preview__link" />
      <div className="project-preview__img">
        {project.previewSrc && <img src={project.previewSrc} alt={project.title} />}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-preview__tags">
        {project.tags.map((tag) => (
          <Button
            btnStyle='outline'
            btnColor='gray'
            btnSize='sm'
            to={"/projects/" + tag}
            key={tag}
            onClick={() => window.scrollTo(0, 0)}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
