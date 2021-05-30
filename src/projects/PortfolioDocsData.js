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
    type: "'default' | 'primary' | 'gray' |'red' | 'green' | 'blue' ",
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
    description: "Disable button",
  },
];

export const DROPDOWNPROPERTIES = [
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
