import React from "react";
import { useLocation } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview.js";

import PROJECTS from '../projects/PROJECTS.js'

function ProjectIndex() {
  const location = useLocation();

  //get pathname
  const pathname = location && location.pathname;

  //remove slash
  const selectedTag = pathname.replace("/projects", "").replace(/^\/|/g, "");

  //find projects that contian tag
  const selectedProjects = selectedTag
    ? PROJECTS.filter((p) => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <section className="project-index">
      {selectedTag && (
        <h1 className="project-index__title">
          {selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)}
        </h1>
      )}
      <div className="project-index__grid">
        {selectedProjects.map((project) => (
          <ProjectPreview project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default ProjectIndex;
