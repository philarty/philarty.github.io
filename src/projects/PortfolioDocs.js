import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
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

const DropdownApis = [
  {
    name: "1placeHolder",
    type: "string",
    default: "1",
    description: "Specifies a large, medium, or small button.",
  },
  {
    name: "0placeHolder",
    type: "string",
    default: "2",
    description: "Specifies a large, medium, or small button.",
  },
  {
    name: "2placeHolder",
    type: "string",
    default: "select...",
    description: "Specifies a large, medium, or small button.",
  },
  {
    name: "3placeHolder",
    type: "string",
    default: "select...",
    description: "Specifies a large, medium, or small button.",
  },
];

const COLUMNS = [
  {
    header: "Name", // string/react component
    accessor: "name",
    sortable: true,
    // width: "1fr", // css grid template columns values, strings/number
  },
  {
    header: "Type",
    accessor: "type",
    // width: "2fr",
  },
  {
    header: "Default",
    accessor: "default",
  },
  {
    header: "Description",
    accessor: "description",
    width: "3fr",
  },
];

const DropdownSection = () => {
  const [disabled, setDisabled] = useState(false);
  const [block, setBlock] = useState(false);
  const [value, setValue] = useState(null);
  const [btnSize, setSize] = useState("md");

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
          placeholder="Select..."
          disabled={disabled}
          block={block}
          btnSize={btnSize}
        />
      </div>
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
      <div className="component-docs__code">
        <code>{code}</code>
      </div>
      <Table columns={COLUMNS} data={DropdownApis} />
    </div>
  );
};

const table = (
  <table>
    <thead>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </thead>
    <tbody>
      <tr>
        <td>placeHolder</td>
        <td>string</td>
        <td>'select...'</td>
        <td>Specifies a large, medium, or small button.</td>
      </tr>
      <tr>
        <td>value</td>
        <td>any</td>
        <td></td>
        <td>The value, or array of values, of the active (pressed) buttons</td>
      </tr>
      <tr>
        <td>options</td>
        <td>array</td>
        <td></td>
        <td>Specifies a large, medium, or small button.</td>
      </tr>
      <tr>
        <td>onChange</td>
        <td>function</td>
        <td></td>
        <td>Callback fired when a button is pressed</td>
      </tr>
      <tr>
        <td>btnColor</td>
        <td>'default' | 'primary' | 'red' | 'blue' | 'green'</td>
        <td>'default'</td>
        <td>Specifies the colors of button.</td>
      </tr>
      <tr>
        <td>btnStyle</td>
        <td>'solid' | 'outline' | 'link' </td>
        <td>'solid'</td>
        <td>Specifies the visual style of button</td>
      </tr>
      <tr>
        <td>block</td>
        <td>boolean</td>
        <td>false</td>
        <td>Spans the full width of the Button parent</td>
      </tr>
    </tbody>
  </table>
);

const PortfolioDocs = (
  <div className="project__body portfolio">
    <ButtonSection />
    <DropdownSection />
  </div>
);

export default PortfolioDocs;
