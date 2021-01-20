import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

function Dashboard({ getCurrentProfile, auth, profile }) {
  useEffect(() => {
    getCurrentProfile();
  });
  const { user } = useState(auth);
  const { profile1, loading } = useState(profile);

  let dashboardContent;

  if (profile1 === null || loading) {
    dashboardContent = <h4>Loading...</h4>;
  } else {
    dashboardContent = <h4>Hello</h4>;
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">Dashboard</div>
        {dashboardContent}
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
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
