import React from "react";

const Button = React.forwardRef((props, ref) => {
  const {
    btnSize,
    btnStyle,
    btnColor,
    block,
    icon,
    children,
    onClick,
    className,
    ...rest
  } = props;
  return (
    <button
      ref={ref}
      className={
        "btn" +
        (btnSize ? " btn-" + btnSize : " btn-md") +
        (icon ? " btn-icon" : "") +
        (btnStyle ? " btn-" + btnStyle : " btn-solid") +
        (btnColor ? "-" + btnColor : "-default") +
        (block ? " btn-block" : "") +
        (className ? " " + className : "")
      }
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
