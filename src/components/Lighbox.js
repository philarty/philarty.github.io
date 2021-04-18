import React, { useState, useRef, useEffect } from "react";

import Button from "./Button";
import Icon from "./Icon";

function Lightbox(props) {
  const { children, className, ...rest } = props;
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const lightboxInner = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (lightboxInner.current && lightboxInner.current.contains(e.target)) {
      return;
    }
    // outside click
    setLightBoxDisplay(false);
  };

  if (lightboxDisplay) {
    return (
      <React.Fragment>
        <div className="lightbox">
          <div className="lightbox__inner" ref={lightboxInner}>
            {children}
          </div>
        </div>
        <div
          className="lightbox__button"
          onClick={() => setLightBoxDisplay(true)}
        >
          {children}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div
        className={"lightbox__button" + (className ? " " + className : "")}
        onClick={() => setLightBoxDisplay(true)}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default Lightbox;
