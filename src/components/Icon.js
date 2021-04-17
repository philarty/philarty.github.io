import React from "react";
import SVG  from 'react-inlinesvg';


const Icon = (props) => {
  const { icon, src, className } = props;

  if (icon) {
    switch (icon) {
      case "sun":
        return (
          <svg
            className="icon icon--sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z" />
              <path d="M12,5.5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4.5A1,1,0,0,1,12,5.5Z" />
              <path d="M12,22a1,1,0,0,1-1-1V19.5a1,1,0,0,1,2,0V21A1,1,0,0,1,12,22Z" />
              <path d="M21,13H19.5a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
              <path d="M4.5,13H3a1,1,0,0,1,0-2H4.5a1,1,0,0,1,0,2Z" />
              <path d="M17.3,7.7a1,1,0,0,1-.7-.3A1,1,0,0,1,16.6,6l1.06-1.06a1,1,0,1,1,1.41,1.41L18,7.4A1,1,0,0,1,17.3,7.7Z" />
              <path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L6,16.6A1,1,0,1,1,7.4,18L6.34,19.07A1,1,0,0,1,5.64,19.36Z" />
              <path d="M18.36,19.36a1,1,0,0,1-.7-.29L16.6,18A1,1,0,1,1,18,16.6l1.06,1.06a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" />
              <path d="M6.7,7.7A1,1,0,0,1,6,7.4L4.93,6.34A1,1,0,0,1,6.34,4.93L7.4,6a1,1,0,0,1,0,1.41A1,1,0,0,1,6.7,7.7Z" />
            </g>
          </svg>
        );
      case "moon":
        return (
          <svg
            className="icon icon--moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M12.5,21A9.5,9.5,0,0,1,9.77,2.4a1,1,0,0,1,1.14.44,1,1,0,0,1-.13,1.21A6.4,6.4,0,0,0,9,8.5,6.51,6.51,0,0,0,15.5,15,6.4,6.4,0,0,0,20,13.22a1,1,0,0,1,1.65,1A9.57,9.57,0,0,1,12.5,21ZM7.36,6.05A7.49,7.49,0,1,0,18,16.64,8.4,8.4,0,0,1,15.5,17,8.51,8.51,0,0,1,7,8.5,8.4,8.4,0,0,1,7.36,6.05Z" />
            </g>
          </svg>
        );

      case "menu":
      default:
        return (
          <svg
            className="icon icon--menu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g id="Symbol">
              <path d="M18,8H6A1,1,0,0,1,6,6H18a1,1,0,0,1,0,2Z" />
              <path d="M18,18H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" />
              <path d="M18,13H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" />
            </g>
          </svg>
        );
    }
  }

  if (src) {
    return (
      <SVG
        src={src}
        className={"icon" + (className ? " " + className : "")}
      />
    );
  }

  return null;
};

export default Icon;
