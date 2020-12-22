import React from "react";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  const { project } = props;
  return (
    <div className="project-preview">
      <Link to={"/project/" + project.id} className="project-preview__link" />
      <div className="project-preview__img">
        <img src={project.imageSrc} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-preview__tags">
        {project.tags.map((tag) => (
          <Link
            to={"/projects/" + tag}
            key={tag}
            onClick={() => window.scrollTo(0, 0)}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
