import React, { Component } from "react";
import Icon from "./Icon";

export function convertKeyValueToDataArray({ dictionary }) {
  //helper function to turn an object of Key:Value pairs into array of Objects
  // dictionary =
  // {
  //   'Cache-Control': 'no-cache',
  //   'Content-Length': '27401',
  //   'Content-Type': 'application/json; charset=utf-8',
  //   'Expires': '-1'
  // };

  // data = [
  //   {key: 'Cache-Control', value: 'no-cache'},
  //   {key: 'Content-Length', value: '27401'},
  //   {key: 'Content-Type', value: 'application/json; charset=utf-8'},
  //   {key: 'Expires', value: '-1'}
  // ];

  const data = [];
  if (dictionary) {
    Object.entries(dictionary)
      .sort()
      .forEach(([key, value]) => {
        data.push({ key, value });
      });
  }
  return data;
}

// const FRIENDS = [
//   {
//     name: 'ben',
//     age: '28',
//     loc: { hello: 'boo', bda: 'js' }
//   },
//   {
//     name: 'jacob',
//     age: '24',
//     loc: 'maryland'
//   },
//   {
//     name: 'dean',
//     loc: 'sf'
//   },
//   {
//     name: 'lizzie',
//     age: '25',
//     loc: ['virginia', 'lol', 800]
//   }
// ];

// const COLUMNS = [
//   {
//     header: 'my friend name', // string/react component
//     accessor: 'name',
//     sortable: true, // boolean
//     cell: ({ value }) => <b>{value}</b>,
//     width: '1fr', // css grid template columns values, strings/number
//     minWidth: 600 // generate minmax(600px,1fr)
//   },
//   {
//     header: <i>age</i>,
//     accessor: 'age',
//     sortable: true,
//     width: '2fr',
//     minWidth: 200
//   },
//   {
//     accessor: 'loc',
//     sortable: true
//     // width: 400
//   }
// ];

const TableHeaderComponent = (props) => {
  const {
    columnField,
    sortable,
    header,
    sortColumn,
    sortDirection,
    setSortDirection,
    setSortColumn,
  } = props;
  const displayHeader = header || (columnField && columnField.toString());

  if (!sortable) {
    return <td>{displayHeader}</td>;
  }

  return (
    <button
      onClick={() => {
        if (sortColumn === columnField) {
          switch (sortDirection) {
            case "asc":
              setSortDirection("desc");
              break;
            case "desc":
              setSortDirection(null);
              break;
            default:
              setSortDirection("asc");
              break;
          }
        } else {
          setSortColumn(columnField);
          setSortDirection("asc");
        }
      }}
    >
      {displayHeader}
      <Icon
        icon="expand"
        className={sortDirection === "desc" ? "desc" : ""}
        style={{ opacity: sortDirection ? 1 : 0.5 }}
      />
    </button>
  );
};

// TableHeaderComponent.propTypes = {
//   sortColumn: PropTypes.string.isRequired,
//   setSortColumn: PropTypes.func.isRequired,
//   setSortDirection: PropTypes.func.isRequired,
//   sortDirection: PropTypes.string,
//   columnField: PropTypes.object,
//   sortable: PropTypes.bool,
//   header: PropTypes.object,
// };

const FullRowComponent = ({ children, className }) => (
  <tr className={className}>
    <td>{children}</td>
  </tr>
);

// FullRowComponent.propTypes = {
//   children: PropTypes.any,
//   className: PropTypes.string,
// };

class Table extends Component {
  static FullRow = FullRowComponent;

  constructor(props) {
    super(props);
    this.setSortColumn = this.setSortColumn.bind(this);
    this.setSortDirection = this.setSortDirection.bind(this);
    this.sortFunction = this.sortFunction.bind(this);
    this.state = {
      sortColumn: null,
      sortDirection: null,
    };
  }

  setSortColumn(prop) {
    this.setState({ sortColumn: prop });
  }

  setSortDirection(prop) {
    this.setState({ sortDirection: prop });
  }

  sortFunction(a, b) {
    const { sortColumn, sortDirection } = this.state;
    const clean = (x) => {
      if (Array.isArray(x[sortColumn])) return x[sortColumn].length;
      //get length of array
      else if (typeof x[sortColumn] === "string")
        return x[sortColumn].toUpperCase();
      //ensure string uppercase
      else return x[sortColumn]; //
    };
    const cleanA = clean(a);
    const cleanB = clean(b);

    if (cleanA === undefined) {
      return 1;
    }
    if (cleanB === undefined) {
      return -1;
    }

    if (sortDirection === "asc") {
      return cleanA > cleanB ? 1 : -1;
    } else {
      return cleanA < cleanB ? 1 : -1;
    }
  }

  render() {
    const { sortColumn, sortDirection } = this.state;
    const { data, columns, overlayTrigger, children } = this.props;

    let displayData = [];
    if (data) {
      displayData = data;
      if (sortColumn && sortDirection) {
        displayData = [...data].sort(this.sortFunction);
      }
    }

    const widths = columns
      .map((col) => {
        const convertToPx = (x) =>
          typeof x === "number" ? x.toString() + "px" : x.toString();
        let width = (col.width && convertToPx(col.width)) || "1fr";
        if (col.minWidth) {
          const minWidth = convertToPx(col.minWidth);
          width = `minmax(${minWidth}, ${width})`;
        }
        return width;
      })
      .join(" ");

    return (
      <table className="table">
        <tr className="table__header" style={{ gridTemplateColumns: widths }}>
          {columns.map((col) => (
            <TableHeaderComponent
              sortable={col.sortable}
              columnField={col.accessor}
              header={col.header}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              setSortColumn={this.setSortColumn}
              setSortDirection={this.setSortDirection}
            />
          ))}
        </tr>

        {displayData.map((row, index) => (
          <tr
            style={{ gridTemplateColumns: widths }}
            className={overlayTrigger ? "overlay-button-trigger" : ""}
          >
            {columns.map((col) => {
              let content = null;

              if (col.accessor) {
                content = row[col.accessor];
              }

              if (col.cell) {
                return <td>{col.cell({ value: content, row, index })}</td>;
              } else return <td>{content}</td>;
            })}
          </tr>
        ))}
        {children}
      </table>
    );
  }
}

export default Table;
