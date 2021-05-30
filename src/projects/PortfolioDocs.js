import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
import ToggleSwitch from "../components/ToggleSwitch";
import { BUTTONPROPERTIES, PORTFOLIODOCSCOLUMNS } from "./PortfolioDocsData";

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
    <div className="project__section component-docs">
      <h4 className="component-docs__header">{name}</h4>
      {children}
      <Table columns={PORTFOLIODOCSCOLUMNS} data={data} />
    </div>
  );
};

const ButtonSection = () => {
  const [btnColor, setColor] = useState("blue");
  const [btnStyle, setStyle] = useState("outline");
  const [btnSize, setSize] = useState("md");
  const [block, setBlock] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const code = `<Button 
  btnStyle="${btnStyle}" 
  btnColor="${btnColor}" 
  btnSize="${btnSize}"${
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
    <div className="project__section component-docs">
      <h4 className="component-docs__header">Button</h4>
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
      <div className="component-docs__options">
        <Dropdown options={colorOptions} value={btnColor} onChange={setColor} />
        <Dropdown options={styleOptions} value={btnStyle} onChange={setStyle} />
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
      <div className="component-docs__code">
        <code>{code}</code>
      </div>
      <Table columns={PORTFOLIODOCSCOLUMNS} data={BUTTONPROPERTIES} />
    </div>
  );
};

const DROPDOWNPROPERTIES = [
  {
    property: "1placeHolder",
    type: "string",
    default: "1",
    description: "Specifies a large, medium, or small button.",
  },
  {
    property: "0placeHolder",
    type: "string",
    default: "2",
    description: "Specifies a large, medium, or small button.",
  },
  {
    property: "2placeHolder",
    type: "string",
    default: "select...",
    description: "Specifies a large, medium, or small button.",
  },
  {
    property: "3placeHolder",
    type: "string",
    default: "select...",
    description: "Specifies a large, medium, or small button.",
  },
];

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
          placeholder="Select..."
          disabled={disabled}
          block={block}
          btnSize={btnSize}
        />
      </div>
      <div className="component-docs__buttons">
        <div className="component-docs__options">
          <Button btnStyle="outline" onClick={() => setValue(null)}>
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
        <Button onClick={() => toggleShowCode(!showCode)}>showCode</Button>
      </div>
      {showCode && (
        <div className="component-docs__code">
          <code>{code}</code>
        </div>
      )}
    </DocSection>
  );
};

const PortfolioDocs = (
  <div className="project__body portfolio">
    <ButtonSection />
    <DropdownSection />
    <p>Table</p>
    <p>Toggle Switch</p>
    <p>Lightbox</p>
    <p>ButtonSelect</p>
  </div>
);

export default PortfolioDocs;
