import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Icon from "../components/Icon";
import ProjectLayout from "../components/ProjectLayout";
import Table from "../components/Table";
import Tabs, { Tab } from "../components/Tabs";
import ToggleSwitch from "../components/ToggleSwitch";
import {
  BUTTONPROPERTIES,
  PORTFOLIODOCSCOLUMNS,
  DROPDOWNPROPERTIES,
  TABSPROPERTIES,
} from "./PortfolioDocsData";

const colorOptions = [
  { value: "primary", label: "Primary" },
  { value: "default", label: "Default" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
];

const styleOptions = [
  { value: "outline", label: "Outline" },
  { value: "solid", label: "Solid" },
  { value: "link", label: "Link" },
];

const sizeOptions = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
];

const DocSection = ({ children, name, data }) => {
  return (
    <ProjectLayout.Section className="component-docs">
      <h4 className="component-docs__header">{name}</h4>
      {children}
      <Table columns={PORTFOLIODOCSCOLUMNS} data={data} />
    </ProjectLayout.Section>
  );
};

const ButtonSection = () => {
  const [btnColor, setColor] = useState("blue");
  const [btnStyle, setStyle] = useState("outline");
  const [btnSize, setSize] = useState("md");
  const [block, setBlock] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showCode, toggleShowCode] = useState(false);

  const code = `<Button${
    btnSize !== "md"
      ? `
  btnSize="` +
        btnSize +
        `"`
      : ``
  }${
    btnColor !== "primary"
      ? `
  btnColor="` +
        btnColor +
        `"`
      : ``
  }${
    btnStyle !== "solid"
      ? `
  btnStyle="` +
        btnStyle +
        `"`
      : ``
  }${
    block
      ? `
  block`
      : ""
  }${
    disabled
      ? `
  disabled`
      : ""
  }
> 
  I'm A Button 
</Button>`;

  return (
    <DocSection name="Button" data={BUTTONPROPERTIES}>
      <div className="component-docs__example component-docs__example--button">
        <Button
          btnStyle={btnStyle}
          btnColor={btnColor}
          btnSize={btnSize}
          block={block}
          disabled={disabled}
        >
          I'm A Button
        </Button>
      </div>
      <div className="component-docs__buttons">
        <div className="component-docs__options">
          <Dropdown
            options={colorOptions}
            value={btnColor}
            onChange={setColor}
          />
          <Dropdown
            options={styleOptions}
            value={btnStyle}
            onChange={setStyle}
          />
          <Dropdown options={sizeOptions} value={btnSize} onChange={setSize} />
          <ToggleSwitch isSelected={block} onToggle={() => setBlock(!block)}>
            Block
          </ToggleSwitch>
          <ToggleSwitch
            isSelected={disabled}
            onToggle={() => setDisabled(!disabled)}
          >
            Disabled
          </ToggleSwitch>
        </div>
        <Button btnStyle="link" icon onClick={() => toggleShowCode(!showCode)}>
          <Icon icon={showCode ? "cross" : "code"} />
        </Button>
      </div>
      {showCode && (
        <div className="component-docs__code">
          <code>{code}</code>
        </div>
      )}
    </DocSection>
  );
};

const DropdownSection = () => {
  const [disabled, setDisabled] = useState(false);
  const [block, setBlock] = useState(false);
  const [value, setValue] = useState(null);
  const [btnSize, setSize] = useState("md");
  const [showCode, toggleShowCode] = useState(false);

  const code = `<Dropdown
  placeholder='Select Surname'
  value={surname}
  onChange={() => setSurname()}
  options=[
    { value: "Green", label: "Green"},
    { value: "Melendez", label: "Melendez"},
    { value: "Middleton",label: "Middleton"},
    { value: "Suarez",label: "Suarez"},
    { value: "Chaney", label: "Chaney"},
  ]${
    btnSize !== "md"
      ? `
  btnSize=` + btnSize
      : ``
  }${
    block
      ? `
  block`
      : ""
  }${
    disabled
      ? `
  disabled`
      : ""
  }
/>`;

  const SAMPLEDROPDOWNOPTIONS = [
    { value: "Green", label: "Green" },
    { value: "Melendez", label: "Melendez" },
    { value: "Middleton", label: "Middleton" },
    { value: "Suarez", label: "Suarez" },
    { value: "Chaney", label: "Chaney" },
  ];
  return (
    <DocSection name="Dropdown" data={DROPDOWNPROPERTIES}>
      <div className="component-docs__example component-docs__example--button">
        <Dropdown
          options={SAMPLEDROPDOWNOPTIONS}
          value={value}
          onChange={setValue}
          placeholder="Select Surname"
          disabled={disabled}
          block={block}
          btnSize={btnSize}
        />
      </div>
      <div className="component-docs__buttons">
        <div className="component-docs__options">
          <Button
            btnStyle="outline"
            disabled={!value}
            onClick={() => setValue(null)}
          >
            Clear
          </Button>
          <Dropdown options={sizeOptions} value={btnSize} onChange={setSize} />

          <ToggleSwitch isSelected={block} onToggle={() => setBlock(!block)}>
            Block
          </ToggleSwitch>
          <ToggleSwitch
            isSelected={disabled}
            onToggle={() => setDisabled(!disabled)}
          >
            Disabled
          </ToggleSwitch>
        </div>
        <Button btnStyle="link" icon onClick={() => toggleShowCode(!showCode)}>
          <Icon icon={showCode ? "cross" : "code"} />
        </Button>
      </div>
      {showCode && (
        <div className="component-docs__code">
          <code>{code}</code>
        </div>
      )}
    </DocSection>
  );
};

const TabsSection = () => {
  const [disabled, setDisabled] = useState(false);
  const [btnSize, setSize] = useState("md");
  const [btnColor, setColor] = useState("primary");

  return (
    <DocSection name="Tabs" data={TABSPROPERTIES}>
      <div className="component-docs__example" style={{minHeight: 200, alignItems: 'flex-start'}}>
        <Tabs btnSize={btnSize} btnColor={btnColor}>
          <Tab label="Dogs" disabled={disabled}>
            <div>
              The domestic dog (Canis familiaris or Canis lupus familiaris) is a
              domesticated descendant of the wolf. The dog derived from an
              ancient, extinct wolf, and the modern grey wolf is the dog's
              nearest living relative. The dog was the first species to be
              domesticated,by hunter–gatherers over 15,000 years ago, before the
              development of agriculture.[1] Their long association with humans
              has led dogs to be uniquely adapted to human behavior, leading to
              a large number of domestic individuals[10] and the ability to
              thrive on a starch-rich diet that would be inadequate for other
              canids.
            </div>
          </Tab>
          <Tab label="Cats" disabled={disabled}>
            <div>
              The cat (Felis catus) is a domestic species of small carnivorous
              mammal. It is the only domesticated species in the family Felidae
              and is often referred to as the domestic cat to distinguish it
              from the wild members of the family. A cat can either be a house
              cat, a farm cat or a feral cat; the latter ranges freely and
              avoids human contact. Domestic cats are valued by humans for
              companionship and their ability to hunt rodents. About 60 cat
              breeds are recognized by various cat registries.
            </div>
          </Tab>
          <Tab label="Ferrets" disabled={disabled}>
            <div>
              The ferret (Mustela furo) is a domestic species of small mustelid.
              The only domesticated species in Mustelidae, it is thought to be a
              descendant of the European polecat, a mammal belonging to the same
              genus as the weasel, Mustela. Their fur is typically brown, black,
              white, or mixed. They have an average length of 51 cm (20 in),
              including a 13 cm (5.1 in) tail, weigh about between 0.7 and 2.0
              kg (1.5 and 4.4 lb), and have a natural lifespan of 7 to 10 years.
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className="component-docs__buttons">
        <div className="component-docs__options">
          <Dropdown options={sizeOptions} value={btnSize} onChange={setSize} />
          <Dropdown
            options={colorOptions}
            value={btnColor}
            onChange={setColor}
          />
          <ToggleSwitch
            isSelected={disabled}
            onToggle={() => setDisabled(!disabled)}
          >
            Disabled
          </ToggleSwitch>
        </div>
      </div>
    </DocSection>
  );
};

const PortfolioDocs = (
  <ProjectLayout.Body>
    <ButtonSection />
    <DropdownSection />
    <TabsSection />
    {/* <p>Table</p>
    <p>Toggle Switch</p>
    <p>Lightbox</p>
    <p>ButtonSelect</p> */}
  </ProjectLayout.Body>
);

export default PortfolioDocs;
