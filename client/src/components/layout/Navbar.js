import React from "react";
import "./navbarright.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
// import Navbar from "react-bootstrap/Navbar";
function Navbar1({ auth, logoutUser, clearCurrentProfile }) {
  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
    clearCurrentProfile();
  };
  const { isAuthenticated, user } = auth;
  const authLinks = (
    <div onClick={onLogoutClick} className="navbarright MediumSizeNav">
      Logout
      <img
        className="rounded-circle"
        style={{ width: "5vw" }}
        src={user.avatar}
        alt={user.name}
        title="you most have an Gravatar connect to your perosnal email to display image"
      />
    </div>
  );
  const guestLink = (
    <Link className="navbarleft" to="/profile">
      {" "}
      Home! ⬅️
    </Link>
  );
  const guestLink1 = (
    <Link className="navbarright MediumSizeNav" to="/register">
      SignUp
    </Link>
  );
  const guestLink2 = (
    <Link className="navbarright MediumSizeNav" to="/login">
      Login
    </Link>
  );
  return (
    <nav className="fullNav">
      <div className="BigSizeNav hover-nav">
        {isAuthenticated ? authLinks : [guestLink, guestLink1, guestLink2]}
      </div>
    </nav>
  );
}

Navbar1.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar1
);
