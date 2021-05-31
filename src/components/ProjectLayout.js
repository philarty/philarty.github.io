import React from "react";

const ProjectLayout = ({ children, className }) => {
  let classNameString = "project";

  if (className) {
    classNameString = classNameString.concat(" " + className);
  }
  return <div className={classNameString}>{children}</div>;
};

const Header = ({ children, className }) => {
  let classNameString = "project-header";

  if (className) {
    classNameString = classNameString.concat(" " + className);
  }
  return <div className={classNameString}>{children}</div>;
};

const Section = ({ children, className, id }) => {
  let classNameString = "project-section";

  if (className) {
    classNameString = classNameString.concat(" " + className);
  }
  return (
    <div className={classNameString} id={id}>
      {children}
    </div>
  );
};

const Body = ({ children, className, id }) => {
    let classNameString = "project-body";
  
    if (className) {
      classNameString = classNameString.concat(" " + className);
    }
    return (
      <div className={classNameString} id={id}>
        {children}
      </div>
    );
  };

ProjectLayout.Header = Header;
ProjectLayout.Body = Body;
ProjectLayout.Section = Section;

export default ProjectLayout;
