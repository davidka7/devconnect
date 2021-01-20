import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profileActions";
import "../auth/auth.css";
function Dashboard({ getCurrentProfile, auth, profilez }) {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  const { user } = auth;
  const { profile, loading } = profilez;
  console.log(profile);
  let dashboardContent;

  if (profile === null || loading) {
    dashboardContent = <i>🍕</i>;
  } else {
    // Check if logged in user has profile data
    if (Object.keys(profile).length > 0) {
      dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>;
    } else {
      // User is logged in but has no profile
      dashboardContent = (
        <div>
          Welcome {user.name} You have not setup a profile, please add some info
          <Link to="/create-profile" className="btn btn-lg btn-info">
            Create Profile
          </Link>
        </div>
      );
    }
  }

  return (
    <div className="register">
      <div className="container">
        <div className="row">Dashboard {dashboardContent}</div>
      </div>
    </div>
  );
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profilez: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
