// import the default item as React and 'useState' from module 'react'
import React, { useState, useEffect } from "react";
// import 'Link' from module 'react-router-dom'
import { Link } from "react-router-dom";
// import the entire file of Navbar.css
import "./Navbar.css";
//import 'Button' from module Button.js, it's shortened because it's a js file, so we can omit the extension
import Button from "../Button/Button";

// define a function called Navbar which accepts 'props' as its parameter.
// { brand } is the syntax to destructure 'brand' property from props object.
// You can retrieve property from 'props' directly without destructing, such as 'props.brand'.
function Navbar(props) {
  // useState is a function export from React, which returns an array, the first value in the array is equal to the argument we passed to useState()
  // the second returned value is a function (which is used to update the first value). Here, the argument is assigned to 'click', and the the function to 'setClick'
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // define a const called 'handleClick' to store an anonymous function which call function setClick with the opposite of click's current state as its parameter.
  // it means, when the current click state is true, then it will update the click state as false.
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // when the innerWidth <= 960, pass false to setButton; when innerWidth > 960, pass true to setButton.
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Logical AND (&&) operator require both items true to be true, so here only when button's state is true, the function would return Button component.
  const renderSignUpButton = () => {
    return (
      button && (
        <Button buttonStyle="btn--outline" hello="hello" hello1="hi">
          SIGN UP
        </Button>
      )
    );
  };

  // useEffect is a function export from React, it executes after the HTML element was rended to the browser.
  // Here, it accepts a function and an array as it's parameter. The array is the first function's execution condition.
  // If there is no value in the array, then the function execute only once at load.
  useEffect(() => {
    showButton();
  }, []);

  // when the 'resize' event happens in the browser, call the function of showButton.
  //  this is a browser API
  window.addEventListener("resize", showButton);

  return (
    // Below this is called JSX
    <>
      {/* since this is JSX(JAVASCRIPT EXTENSION), it use className instead of class */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/#" className="navbar-logo" onClick={closeMobileMenu}>
            {/* {props.brand} is the syntax to destructure/unpack brand property from object props of function Navbar */}
            {props.brand} <i className="fab fa-typo3"></i>
          </Link>

          {/* onClick is a browser event, call function handleClick when the event happens */}
          <div className="menu-icon" onClick={handleClick}>
            {/* the className is according to the state of 'click', when the state is true, it's 'fas ffa-times'; when it's false, it's 'fas fa-bars'. */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {/* call the function  */}
          {renderSignUpButton()}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
