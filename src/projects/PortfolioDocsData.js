export const PORTFOLIODOCSCOLUMNS = [
  {
    header: "Property", // string/react component
    accessor: "property",
    // minWidth: 100,
    // sortable: true,
    // width: "1fr", // css grid template columns values, strings/number
  },
  {
    header: "Type",
    accessor: "type",
    width: "2fr",
    // minWidth: 100
  },
  {
    header: "Default",
    accessor: "default",
    // minWidth: 100,
  },
  {
    header: "Description",
    accessor: "description",
    width: "3fr",
    // minWidth: 500,
  },
];

export const BUTTONPROPERTIES = [
  {
    property: "children",
    type: "any",
    description: "Element rendered inside a buttom.",
  },
  {
    property: "onClick",
    type: "function",
    description: "Callback fired when a button is pressed.",
  },
  {
    property: "btnSize",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Specifies a large, medium, or small button.",
  },
  {
    property: "btnColor",
    type: "'default' | 'primary' |'red' | 'green' | 'blue' ",
    default: "'default'",
    description: "Specifies bubtton color",
  },
  {
    property: "btnStyle",
    type: "'solid' | 'outline' | 'link'",
    default: "'solid'",
    description: "Specifies bubtton style",
  },
  {
    property: "block",
    type: "boolean",
    default: "false",
    description: "Spans the full width of the button parent",
  },
  {
    property: "disabled",
    type: "boolean",
    default: "false",
    description: "Make the button disabled",
  },
];

export const DROPDOWNPROPERTIES = [
  {
    property: "placeHolder",
    type: "string",
    default: "select...",
    description: "Placeholder for dropdown when no value is selected",
  },
  {
    property: "value",
    type: "any",
    description: "",
  },
  {
    property: "options",
    type: "array",
    description: "Array of options",
  },
  {
    property: "onChange",
    type: "function",
    description: "A callback fired when the value prop changes",
  },
  {
    property: "block",
    type: "boolean",
    default: "false",
    description: "Spans the full width of the dropdown parent",
  },
  {
    property: "disabled",
    type: "boolean",
    default: "false",
    description: "Make the dropdown disabled",
  },
  {
    property: "btnSize",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Specifies a large, medium, or small button.",
  },
];

export const TABSPROPERTIES = [
  {
    property: "btnSize",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Specifies a large, medium, or small button.",
  },
  {
    property: "btnColor",
    type: "'default' | 'primary' |'red' | 'green' | 'blue' ",
    default: "'default'",
    description: "Specifies tab color",
  },
  {
    property: "disabled",
    type: "boolean",
    default: "false",
    description: "Make the dropdown disabled",
  },
];

export const PHOTOSLIDERPROPERTIES = [
  {
    property: "leftSrc",
    type: null,
    default: null,
    description: "Specify source of left photo",
  },
  {
    property: "RightSrc",

    description: "Specifies source of right photo",
  },
];
