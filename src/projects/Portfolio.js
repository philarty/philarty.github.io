import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import ToggleSwitch from "../components/ToggleSwitch";

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
    </div>
  );
};

const DropdownSection = () => {
  const [disabled, setDisabled] = useState(false);
  const [block, setBlock] = useState(false);
  const [value, setValue] = useState(null);

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
    <div className="project__section component-docs">
      <h4 className="component-docs__header">Dropdown</h4>
      <div className="component-docs__example component-docs__example--button">
        <Dropdown
          options={SAMPLEDROPDOWNOPTIONS}
          value={value}
          onChange={setValue}
          placeholder="Select Surname"
          disabled={disabled}
          block={block}
        />
      </div>
      <div className="component-docs__options">
        <Button btnStyle="outline" onClick={() => setValue(null)}>
          Clear
        </Button>
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
    </div>
  );
};

const Portfolio = (
  <div className="project__body portfolio">
    <ButtonSection />
    <DropdownSection />
  </div>
);

export default Portfolio;
