import React, { useState, useRef, useEffect } from "react";

import Button from "./Button";
import Icon from "./Icon";

function Lightbox(props) {
  const { children } = props;
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
      console.log(node)
    // if (node.current.contains(e.target)) {
    //   // inside click
    //   return;
    // }
    // outside click
    setLightBoxDisplay(false);
  };

  if (lightboxDisplay) {
    return (
      <React.Fragment>
        <div className="lightbox" ref={node}>
          <div className="lightbox__background" />

          <div className="lightbox__container">
            {children}
            <Button
              onClick={() => setLightBoxDisplay(false)}
              btnStyle="link"
              icon
            >
              <Icon icon="cross" />
            </Button>
          </div>
        </div>
        <button
          className="lightbox__button"
          onClick={() => setLightBoxDisplay(true)}
        >
          {children}
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <button
        className="lightbox__button"
        onClick={() => setLightBoxDisplay(true)}
      >
        {children}
      </button>
    );
  }
}

export default Lightbox;
