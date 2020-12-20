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
        (btnSize ? " btn--" + btnSize : "") +
        (btnStyle ? " btn--" + btnStyle : "") +
        (btnColor ? " btn--" + btnColor : " btn--default") +
        (block ? " btn--block" : "") +
        (icon ? " btn--icon" : "")
      }
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
