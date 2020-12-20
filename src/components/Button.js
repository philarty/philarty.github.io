import React from "react";

const Button = (props) => {
  const {
    btnSize,
    btnStyle,
    btnColor,
    block,
    icon,
    children,
    onClick,
    ...rest
  } = props;
  return (
    <button
      className={
        "btn" +
        (btnSize ? " btn-" + btnSize : " btn-md") +
        (icon ? " btn-icon" : "") +
        (btnStyle ? " btn-" + btnStyle : " btn-solid") +
        (btnColor ? "-" + btnColor : "-default") +
        (block ? " btn-block" : "")
      }
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
