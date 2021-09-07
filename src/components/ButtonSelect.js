import React from "react";
import Button from "./Button";

const ButtonSelect = (props) => {
  const {
    options,
    btnSize,
    btnColor,
    block,
    value,
    onSelect,
    className,
    ...rest
  } = props;

  return (
    <div className={"btn-group" + (className ? " " + className : "")}>
      {options.map((option) => (
        <Button
          btnSize={btnSize}
          btnStyle={value === option.value ? "solid" : "outline"}
          btnColor={btnColor}
          block={block}
          onClick={() => onSelect(option.value)}
          {...rest}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonSelect;
