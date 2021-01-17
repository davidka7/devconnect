import React from "react";
import "./navbarright.css";
import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
function Navbar1() {
  return (
    <nav className="fullNav">
      <div className="BigSizeNav hover-nav">
        <Link className="navbarleft" to="/profile">
          {" "}
          Home! ⬅️
        </Link>
        <Link className="navbarright MediumSizeNav" to="/register">
          SignUp
        </Link>
        <Link className="navbarright MediumSizeNav" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar1;
