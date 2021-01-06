import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

// define a const called STYLES, it's an array with 2 values. The upper case means it should not be changed.
const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

// define a function called Button, which accepts a parameter named props. Props is a React default object
// which includes all attributes passed from user. Here we destructured 5 attributes out of it and assigned them to the 5 items below
// (which has the same name as the attribute name before.)
// the syntax can be shorten as
// const Button = ({ children, type, onClick, buttonStyle, buttonSize})
const Button = (props) => {
  const {
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    customClassName,
  } = props;

  // this const value is limited within the STYLES.
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonStyle) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${customClassName}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
