import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        {/* use the instance of Navbar.jsx with the attribute of brand */}
        <Navbar brand="T_T" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer brand="T_T" />
      </Router>
    </>
  );
}

export default App;
