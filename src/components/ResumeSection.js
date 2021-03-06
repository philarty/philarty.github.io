import React from "react";
import { Link } from "react-router-dom";

const RESUME = [
  {
    header: "Education",
    contents: [
      {
        sub_header: "Rhode Island School of Design - RISD",
        title: "BFA Industrial Design",
        period: "2014-2018",
        //   title: "Honor title Student",
        //  period: 3.9,
      },
      {
        sub_header: "Brown University",
        title: "Spanish Studies",
        period: "2017-2018",
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
        sub_header: "Chronicle Books",
        title: "Industrial Design Fellow",
        period: "2018-2019",
        description: [
          "Worked across different publishing-groups and cross functional teams to develop novel products and packagings from conception to market. Considered point of purchase, perceived value, shipping and cost.",
          "Created low fidelity physical prototypes and visual renderings of new concepts. Taught other designers how to utilize 3D modeling and rendering softwares and programs to realize concepts.",
          "Managed international vendor relationships to ensure high production quality while maintaining margins.",
        ],
      },
      {
        sub_header: "Praise HK",
        title: "UIUX Designer",
        period: "2018-2019",
        description: [
          "Commissioned by HKUST to develop a user centric smart city app to summarize complex street level pollution data and health risk information.",
          "Mobile app aims to empower people affected by COPD or asthma to reduce individual pollution exposure in their daily life and provide personalized analytics.",
          "Created user experience maps, wire-frames, user interface, and background illustrations.",
        ],
      },
      {
        sub_header: "PBteen",
        title: "DecAcc Design Intern",
        period: "Summer 2017",
        description: [
          "Expanded product line for college students and dorm rooms. Developed a variety of space-saving solutions to management team which were brought to market.",
          "Assisted designers to iterate on product ideas and produce design specs to be sent to overseas vendors.",
        ],
      },
    ],
  },
  {
    header: "Skills",
    contents: [
      {
        sub_header: "Software - Mac & PC",
        description: [
          "Illustrator",
          "Sketch",
          "HTML",
          "CSS",
          "Rhino",
          "SolidWorks",
          "KeyShot",
          "Fusion360",
          "Brazil",
          "Grasshopper",
          "InDesign",
          "Photoshop",
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
      {
        sub_header: "First Responder Headlamp",
        title: "Brown University and RI Hospita",
        period: "Fall 2017",
        description: [
          "Partnered with RI hospital EMT team and Brown University engineers to develop and design a headlamp to ease airway examination during emergency situations. Headlamp aligns light with vision to improve illumination of mouth and airway.",
          "Conducted qualitative user research to discover challenges of lighting equipment. Created a functional, high fidelity prototype that received positive reviews during final user testing.Conducted qualitative user research to discover challenges of lighting equipment. Created a functional, high fidelity prototype that received positive reviews during final user testing.",
        ],
      },
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
      {
        description: [
          "2018 Industrial Design Senior Show",
          "2017 ECA Product Design Exhibition",
          "2015 Foundation Studies Triennial",
        ],
      },
    ],
  },
  {
    header: "Awards And Scholarship",
    contents: [
      {
        description: [
          "Fred M. Roddy Memorial Scholarship",
          "MIT Hacking Medicine Sponsor Award",
          "The Clive Lambourn Memorial Prize",
          "Roivant Science Sponsorship Award",
          "Thomas Alva Edison Industrial Design Award",
        ],
      },
    ],
  },
];

const SectionHeader = ({ children }) => <h3>{children}</h3>;
const SubSection = ({ children, ...rest }) => (
  <div className="resume__item" {...rest}>
    {children}
  </div>
);
const SubHeader = ({ children }) => <h4>{children}</h4>;
const Detail = ({ title, period }) => (
  <div className="resume__detail">
    <h5>{title}</h5>
    <span />
    {period && <p>{period}</p>}
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

const ResumeSection = () => (
  <div className="resume">
    <div>
      <h2>Philip Lau</h2>
      <p>UIUX Engineer</p>
      <Link to='/' >philarty.github.io/portfolio</Link>
    </div>
    <div>
      {RESUME.slice(0, 3).map((section) => (
        <Section key={section.header}>
          <Section.Header children={section.header} />
          {section.contents.map((content) => (
            <Section.SubSection
              key={content.sub_header || content.title || content.description}
            >
              <Section.SubHeader children={content.sub_header} />
              {(content.title || content.period) && (
                <Section.Detail title={content.title} period={content.period} />
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
      ))}
    </div>
    <div>
      {RESUME.slice(3).map((section) => (
        <Section key={section.header}>
          <Section.Header children={section.header} />
          {section.contents.map((content) => (
            <Section.SubSection
              key={content.sub_header || content.title || content.description}
            >
              <Section.SubHeader children={content.sub_header} />
              {(content.title || content.period) && (
                <Section.Detail title={content.title} period={content.period} />
              )}
              <Section.Content>
                {content.description &&
                  content.description.map((description) => (
                    <Section.Description
                      children={description}
                      key={description}
                    />
                  ))}
              </Section.Content>
            </Section.SubSection>
          ))}
        </Section>
      ))}
    </div>
  </div>
);

export default ResumeSection;
