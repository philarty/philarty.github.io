import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import SVG from "react-inlinesvg";
import Icon from "../components/Icon";

const RESUME = [
  {
    header: "Education",
    contents: [
      {
        sub_header: "Rhode Island School of Design - RISD",
        title: "BFA Industrial Design",
        period: "2014 - 2018",
      },
      {
        sub_header: "Brown University",
        title: "Spanish Studies",
        period: "2017 - 2018",
      },
      {
        sub_header: "Edinburgh College of Arts - ECA",
        title: "Product Design",
        period: "Spring 2017",
      },
    ],
  },
  {
    header: "Work Experience",
    contents: [
      {
        sub_header: "Brex",
        title: "Senior software engineer",
        period: "2021 - Present",
        description: [
          "Led mobile implementation of Global Mileage Reimbursement, increasing mobile submissions by 25%, and developed a new Expense Details Pane, reducing load and save times by 50%.",
          "Enhanced user experience by enabling granular error messages and mobile bank account editing, significantly reducing customer service inquiries.",
          "Contributed new input components to the Metal library and created a global currency guideline for consistent display across products.",
          "Advocated for key features like Plaid connections on mobile and custom extended fields, while leading a team of 5 engineers and mentoring new team members.",
        ],
      },
      {
        sub_header: "Moesif",
        title: "UIUX Engineer",
        period: "2019 - 2021",
        description: [
          "Improve user integration rates and reduce codebase by designing and refactoring react components for both front facing website, and web application",
          "Redesign to a more user friendly design and maintain static blog/docs site by building a cohesive Jekyll template in Liquid.",
          "Develop and grow a consistent design system and brand guidelines to be used across the site and application",
          "Create inclusive marketing material used across various social media including Youtube, Facebook, Reddit, LinkedIn",
        ],
      },
      {
        sub_header: "Praise HK",
        title: "UIUX Designer",
        period: "2018  - Present",
        description: [
          "Commissioned by HKUST to develop a user centric smart city app to summarize complex street level pollution data & health risk information.",
          "Mobile app aims to empower people affected by COPD or asthma to reduce individual pollution exposure in their daily life and provide personalized analytics.",
          "Created user experience maps, wire-frames, user interface, and background illustrations.",
        ],
      },
      {
        sub_header: "Chronicle Books",
        title: "Industrial Design Fellow",
        period: "2018 - 2019",
        description: [
          "Worked across different publishing-groups and cross functional teams to develop novel products and packagings from conception to market. Considered point of purchase, perceived value, shipping and cost.",
          "Created low fidelity physical prototypes and visual renderings of new concepts. Taught other designers how to utilize 3D modeling and rendering softwares and programs to realize concepts.",
          "Managed international vendor relationships to ensure high production quality while maintaining margins.",
        ],
      },
      // {
      //   sub_header: "PBteen",
      //   title: "DecAcc Design Intern",
      //   period: "Summer 2017",
      //   description: [
      //     "Expanded product line for college students and dorm rooms. Developed a variety of space-saving solutions to management team which were brought to market.",
      //     "Assisted designers to iterate on product ideas and produce design specs to be sent to overseas vendors.",
      //   ],
      // },
    ],
  },
  {
    header: "Skills",
    contents: [
      {
        sub_header: "Coding",
        description: [
          "HTML",
          "SCSS",
          "Javascript",
          "React",
          "Liquid",
          "Jekyll",
        ],
      },
      {
        sub_header: "Software - Mac & PC",
        description: [
          "Illustrator",
          "InDesign",
          "Photoshop",
          "Sketch",
          "Rhino",
          "SolidWorks",
          "KeyShot",
          "Fusion360",
          "Brazil",
          "Grasshopper",
        ],
      },
      {
        sub_header: "Prototype",
        description: [
          "Metal machining",
          "Wood forming ",
          "Sketching",
          "Marker Rendering",
          "Hacking",
          "CNC milling",
          "Glass Blowing",
          "Drafting",
        ],
      },
    ],
  },
  {
    header: "Relevant Experience",
    contents: [
      {
        sub_header: "Reclaim Foundation Community App",
        title: "Reclaim Foundataion",
        period: "2021",
        description: [
          "Build React component from ground up for the front end team to use in the internal community portal.",
        ],
      },
      {
        sub_header: "Sundial aiir quality monitor app",
        title: "Sundial",
        period: "2020",
        description: [
          "Develop user journeys to help decide on front-end framework",
          "Design mobile web app for users to easily navigate and understnad complex air quality data.",
        ],
      },
      {
        sub_header: "Design Fellowship Recruitment Campaign",
        title: "Chronicle Books",
        period: "2018",
        description: [
          "Designed a poster and interactive postcard inspired by Chronicle Books’ logo, the spectacles. Provided art direction and designed additional campaign materials such as social media assets, website landing page, and email banner to advertise their fellowship program.",
        ],
      },
      {
        sub_header: "Gap UrbanLite Arox Bra",
        title: "MIT and Gap Inc",
        period: "MIT and Gap Inc",
        description: [
          "Collaborated with an interdisciplinary team at MIT to develop a user friendly, versatile, comfortable day-tonight bra that allows women to transition seamlessly between different activities.",
          "Performed user research to discover pain point of currently available sports bra. Created high fidelity prototype and conducted user testing to refine solution.",
        ],
      },
      // {
      //   sub_header: "First Responder Headlamp",
      //   title: "Brown University and RI Hospital",
      //   period: "Fall 2017",
      //   description: [
      //     "Partnered with RI hospital EMT team and Brown University engineers to develop and design a headlamp to ease airway examination during emergency situations. Headlamp aligns light with vision to improve illumination of mouth and airway.",
      //     "Conducted qualitative user research to discover challenges of lighting equipment. Created a functional, high fidelity prototype that received positive reviews during final user testing.Conducted qualitative user research to discover challenges of lighting equipment. Created a functional, high fidelity prototype that received positive reviews during final user testing.",
      //   ],
      // },
    ],
  },
  {
    header: "Languages",
    contents: [
      {
        title: "English",
        period: "Native proficiency",
      },
      {
        title: "Chinese",
        period: "Native proficiency",
      },
      {
        title: "Mandarin",
        period: "Working proficiency",
      },
    ],
  },
  {
    header: "Personal Interest",
    contents: [
      {
        description: ["Jumping Photos", "LGBT Films", "Bike Share", "Dancing"],
      },
    ],
  },
  {
    header: "Exhibitions",
    contents: [
      { title: "2018 Industrial Design Senior Show" },
      { title: "2017 ECA Product Design Exhibition" },
      { title: "2015 Foundation Studies Triennial" },
    ],
  },
  {
    header: "Awards And Scholarship",
    contents: [
      { title: "Fred M. Roddy Memorial Scholarship" },
      { title: "MIT Hacking Medicine Sponsor Award" },
      { title: "The Clive Lambourn Memorial Prize" },
      { title: "Roivant Science Sponsorship Award" },
      { titel: "Thomas Alva Edison Industrial Design Award" },
    ],
  },
];

const SectionHeader = ({ children }) => <h3>{children}</h3>;
const SubSection = ({ children, collapsible }) => {
  const [isOpen, setOpen] = useState(false);
  return collapsible ? (
    <div
      className={
        "resume__item" +
        (isOpen ? " resume__item--open" : " resume__item--closed")
      }
      onClick={() => setOpen(!isOpen)}
    >
      {children}
    </div>
  ) : (
    <div className="resume__item">{children}</div>
  );
};
const SubHeader = ({ children }) => <h4>{children}</h4>;
const Detail = ({ title, period, collapsible }) => (
  <div className="resume__detail">
    <h5>{title}</h5>
    {period && <p>{period}</p>}
    {collapsible && <Icon icon="expand" />}
  </div>
);
const Content = ({ children }) => (
  <div className="resume__content">{children}</div>
);

//set so that iff descript is a list of items, it can be styled accordingly.
const Description = ({ children }) => {
  if (children.length < 20) {
    return <span>{children}</span>;
  } else {
    return <p>{children}</p>;
  }
};

class Section extends React.Component {
  static Header = SectionHeader;
  static SubSection = SubSection;
  static SubHeader = SubHeader;
  static Detail = Detail;
  static Content = Content;
  static Description = Description;

  render() {
    const { children } = this.props;
    return <div className="resume__section">{children}</div>;
  }
}

const ResumeSection = () => {
  const renderOneSide = (section) => (
    <Section key={section.header}>
      <Section.Header children={section.header} />
      {section.contents.map((content) => (
        <Section.SubSection
          key={content.sub_header || content.title || content.description}
          collapsible={content.collapsible}
        >
          <Section.SubHeader children={content.sub_header} />
          {(content.title || content.period) && (
            <Section.Detail
              title={content.title}
              period={content.period}
              collapsible={content.collapsible}
            />
          )}
          {content.description && (
            <Section.Content>
              {content.description &&
                content.description.map((description) => (
                  <Section.Description
                    children={description}
                    key={description}
                  />
                ))}
            </Section.Content>
          )}
        </Section.SubSection>
      ))}
    </Section>
  );
  return (
    <div className="resume">
      <div className="resume__logo">
        <SVG src={logo} />
      </div>
      <div className="resume__profile">
        <h2>Philip Lau</h2>
        <p>UIUX Engineer</p>
        <Link to="/">philarty.io</Link>
      </div>
      <div>{RESUME.slice(0, 3).map(renderOneSide)}</div>
      <div>{RESUME.slice(3).map(renderOneSide)}</div>
    </div>
  );
};

export default ResumeSection;
