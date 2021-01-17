import React from "react";
import "./landing.css";
import "./navbarright.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="fullLayout">
      <br /> <br />
      <div className="fullLayout1">Developers and Animals;</div>
      <div className="fullLayout2">One Big Family</div>
      <div className="navbarright">
        <Link to="/register" className="navbarright MediumSizeNav">
          SignUp
        </Link>{" "}
        <Link to="login" className="navbarright MediumSizeNav">
          Login
        </Link>{" "}
      </div>
    </div>
  );
}

export default Landing;
