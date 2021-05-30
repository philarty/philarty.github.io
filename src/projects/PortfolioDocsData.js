export const PORTFOLIODOCSCOLUMNS = [
    {
      header: "Property", // string/react component
      accessor: "property",
      // sortable: true,
      // width: "1fr", // css grid template columns values, strings/number
    },
    {
      header: "Type",
      accessor: "type",
      width: "2fr",
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