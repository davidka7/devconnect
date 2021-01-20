import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TestFieldGroup from "../common/TextFieldGroup";
function CreateProfile() {
  const [displaySocialInpute] = useState(false);
  const [handle] = useState("");
  const [company] = useState("");
  const [website] = useState("");
  const [location] = useState("");
  const [status] = useState("");
  const [skills] = useState("");
  const [bio] = useState("");
  const [twitter] = useState("");
  const [facebook] = useState("");
  const [linkedin] = useState("");
  const [instagram] = useState("");
  const [errors] = useState({});
  return (
    <div className="profile-creator">
      <div className="container">
        <div className="row">
          <div className="middle">Create Your Profile</div>
          <div className="middle">
            Lets get some information so you can present yourself.
          </div>

          <small> * = required fields</small>
        </div>
      </div>
    </div>
  );
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(null)(CreateProfile);
