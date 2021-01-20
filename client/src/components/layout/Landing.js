import React, { useEffect } from "react";
import "./landing.css";
import "./navbarright.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Landing({ auth, history }) {
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  });
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
