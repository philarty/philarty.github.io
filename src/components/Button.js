import React from "react";
import { Link } from "react-router-dom";

const Button = React.forwardRef((props, ref) => {
  const {
    btnSize,
    btnStyle,
    btnColor,
    block,
    icon,
    children,
    onClick,
    to,
    href,
    className,
    ...rest
  } = props;

  const classNameString =
    "btn" +
    (btnSize ? " btn-" + btnSize : " btn-md") +
    (icon ? " btn-icon" : "") +
    (btnStyle ? " btn-" + btnStyle : " btn-solid") +
    (btnColor ? "-" + btnColor : "-default") +
    (block ? " btn-block" : "") +
    (className ? " " + className : "");

  if (href) {
    return (
      <a ref={ref} href={href} className={classNameString} {...rest}>
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link ref={ref} to={to} className={classNameString} {...rest}>
        {children}
      </Link>
    );
  } else
    return (
      <button ref={ref} className={classNameString} onClick={onClick} {...rest}>
        {children}
      </button>
    );
});

export default Button;
