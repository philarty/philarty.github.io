export const PORTFOLIODOCSCOLUMNS = [
  {
    header: "Name", // string/react component
    accessor: "name",
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
    id: "Button",
    props: [
      {
        name: "children",
        type: "any",
        description: "Element rendered inside a buttom.",
      },
      {
        name: "onClick",
        type: "function",
        description: "Callback fired when a button is pressed.",
      },
      {
        name: "btnSize",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Specifies a large, medium, or small button.",
      },
      {
        name: "btnColor",
        type: "'default' | 'primary' | 'red' | 'green' | 'blue' ",
        default: "'default'",
        description: "Specifies bubtton color",
      },
      {
        name: "btnStyle",
        type: "'solid' | 'outline' | 'link'",
        default: "'solid'",
        description: "Specifies bubtton style",
      },
      {
        name: "block",
        type: "boolean",
        default: "false",
        description: "Spans the full width of the button parent",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Make the button disabled",
      },
    ],
  },
];

export const DROPDOWNPROPERTIES = [
  {
    id: "Dropdown",
    props: [
      {
        name: "placeHolder",
        type: "string",
        default: "select...",
        description: "Placeholder for dropdown when no value is selected",
      },
      {
        name: "value",
        type: "any",
        description: "",
      },
      {
        name: "options",
        type: "array",
        description: "Array of options",
      },
      {
        name: "onChange",
        type: "function",
        description: "A callback fired when the value prop changes",
      },
      {
        name: "block",
        type: "boolean",
        default: "false",
        description: "Spans the full width of the dropdown parent",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Make the dropdown disabled",
      },
      {
        name: "btnSize",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Specifies a large, medium, or small button.",
      },
    ],
  },
];

export const TABSPROPERTIES = [
  {
    id: "Tabs",
    props: [
      {
        name: "btnSize",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Specifies a large, medium, or small button.",
      },
      {
        name: "btnColor",
        type: "'default' | 'primary' | 'red' | 'green' | 'blue' ",
        default: "'default'",
        description: "Specifies tab color",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable switching between tabs",
      },
    ],
  },
  {id: 'Tab',
  props: [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable specific tabs",
    },
    {
      name: "label",
      type: "string",
      default: null,
      description: "label to be displayed on tab.",
    },
  ],}
];

export const PHOTOSLIDERPROPERTIES = [
  {
    id: "PhotoSlider",
    props: [
      {
        name: "leftSrc",
        type: null,
        default: null,
        description: "Specify source of left photo",
      },
      {
        name: "RightSrc",

        description: "Specifies source of right photo",
      },
    ],
  },
  
];
