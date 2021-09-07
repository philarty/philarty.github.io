import React, { useState, useRef, useEffect } from "react";

export const useContainerWidth = (myRef) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(myRef.current.offsetWidth);
    };

    if (myRef.current) {
      setWidth(myRef.current.offsetWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return width;
};

const PhotoSlider = (props) => {
  const { leftSrc, RightSrc } = props;
  const ref = useRef();
  const width = useContainerWidth(ref);

  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="photo-slider" ref={ref}>
      <div className="photo-slider__right">
        <img src={RightSrc} style={{ width: width }} alt='right' />
      </div>
      <div
        className="photo-slider__left"
        style={{ width: sliderPosition + "%" }}
      >
        <img src={leftSrc} style={{ width: width }} alt='left'  />
      </div>
      <input
        className="photo-slider__slider"
        type="range"
        id="imgPosition"
        name="imgPosition"
        min={0}
        max={100}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setSliderPosition(value);
        }}
      />
    </div>
  );
};

export default PhotoSlider;
