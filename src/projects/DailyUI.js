import React from "react";
import Lightbox from "../components/Lighbox";
// import praiseImage1 from "../images/praise-hk/paise-hk-1.png";
import praiseImage2 from "../images/praise-hk/paise-hk-2.png";

// const PROJECTS = [
//   {
//     name: "settings",
//     mainImage: praiseImage1,
//     images: [praiseImage2, praiseImage2],
//   },
//   {
//     name: "settings",
//     mainImage: praiseImage1,
//     images: [praiseImage2, praiseImage2],
//   },
//   {
//     name: "settings",
//     mainImage: praiseImage1,
//     images: [praiseImage2, praiseImage2],
//   },
//   {
//     name: "settings",
//     mainImage: praiseImage1,
//     images: [praiseImage2, praiseImage2],
//   },
//   {
//     name: "settings",
//     mainImage: praiseImage1,
//     images: [praiseImage2, praiseImage2],
//   },
// ];

// const ProjectSection = (props) => {
//   const { project, index } = props;
//   return (
//     <div className="daily-ui__project">
//       {index + 1}
//       <h3>{project.name}</h3>
//       <img src={project.mainImage} alt={project.name} />

//       {project.images.map((img) => {
//         return <img src={img} alt={project.name} />;
//       })}
//     </div>
//   );
// };

const DailyUI = (
  <div className="project__body">
    <div className="project__section daily-ui">
      <Lightbox ><img src={praiseImage2} alt='hello'/></Lightbox>
      {/* {PROJECTS.map((project, index) => (
        <ProjectSection project={project} index={index} key={project.name}/>
      ))} */}
    </div>
  </div>
);

export default DailyUI;
