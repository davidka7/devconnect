import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createProfile } from "../../actions/profileActions";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import "../auth/auth.css";
function CreateProfile({ profile, errorz, createProfile }) {
  const [displaySocialInpute, setDisplaySocialInpute] = useState(false);
  const [handle, setHandle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (errorz) {
      setErrors(errorz);
    }
  }, [errorz]);

  const handleChange = (e) => {
    if (e.target.name === "handle") {
      setHandle(e.target.value);
    } else if (e.target.name === "company") {
      setCompany(e.target.value);
    } else if (e.target.name === "website") {
      setWebsite(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    } else if (e.target.name === "status") {
      setStatus(e.target.value);
    } else if (e.target.name === "skills") {
      setSkills(e.target.value);
    } else if (e.target.name === "bio") {
      setBio(e.target.value);
    } else if (e.target.name === "twitter") {
      setTwitter(e.target.value);
    } else if (e.target.name === "instagram") {
      setInstagram(e.target.value);
    } else if (e.target.name === "linkedin") {
      setLinkedin(e.target.value);
    } else if (e.target.name === "facebook") {
      setFacebook(e.target.value);
    }
  };
  const handleSubmit = () => {};
  const handleSocial = () => {
    setDisplaySocialInpute(true);
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="middle">Create Your Profile</div>
          <div className="middle">
            Lets get some information so you can present yourself.
          </div>
          <small> * = required fields</small>
          <br />
          <Form className="min-width">
            <Form.Group controlId="formBasicHandle">
              <small>
                {" "}
                Handle could be anything unique, nickname, etc. Cant be changed
                later
              </small>
              <TextFieldGroup
                className="space1 space"
                placeholder="* Handle"
                name="handle"
                type="handle"
                value={handle}
                onChange={handleChange}
                error={errors.handle}
              ></TextFieldGroup>
            </Form.Group>
            <Form.Group controlId="formBasicStatus">
              <small> Current Job Status</small>
              <TextFieldGroup
                className="space1 space"
                placeholder="* Status"
                name="status"
                type="status"
                value={status}
                onChange={handleChange}
                error={errors.status}
              ></TextFieldGroup>
            </Form.Group>
            <Form.Group controlId="formBasicCompany">
              <small> Company your currently working for</small>
              <TextFieldGroup
                className="space1 space"
                placeholder="Company"
                name="company"
                type="company"
                value={company}
                onChange={handleChange}
                error={errors.company}
              ></TextFieldGroup>
            </Form.Group>
            <Form.Group controlId="formBasicWebsite">
              <small> Personal or Company website</small>
              <TextFieldGroup
                className="space1 space"
                placeholder="website"
                name="website"
                type="website"
                value={website}
                onChange={handleChange}
                error={errors.website}
              ></TextFieldGroup>
            </Form.Group>
            <Form.Group controlId="formBasicLocation">
              <small> Where is your general location</small>
              <TextFieldGroup
                className="space1 space"
                placeholder="location"
                name="location"
                type="location"
                value={location}
                onChange={handleChange}
                error={errors.location}
              ></TextFieldGroup>
            </Form.Group>
            <Form.Group controlId="formBasicSkills">
              <small> Keep your skill/talents seperated by a comma</small>
              <TextAreaFieldGroup
                className="space1 space"
                placeholder="* Skills"
                name="skills"
                type="skills"
                value={skills}
                onChange={handleChange}
                error={errors.skills}
              ></TextAreaFieldGroup>
            </Form.Group>
            <Form.Group controlId="formBasicBio">
              <small>
                A little description about yourself, where your from, what you
                do,etc.
              </small>
              <TextAreaFieldGroup
                className="space1 space"
                placeholder="bio"
                name="bio"
                type="bio"
                value={bio}
                onChange={handleChange}
                error={errors.bio}
              ></TextAreaFieldGroup>
            </Form.Group>
            {displaySocialInpute ? (
              <div>
                <TextFieldGroup
                  className="space1 space"
                  placeholder="Twitter URL"
                  name="twitter"
                  type="twitter"
                  value={twitter}
                  onChange={handleChange}
                  error={errors.twitter}
                ></TextFieldGroup>
                <TextFieldGroup
                  className="space1 space"
                  placeholder="Facebook URL"
                  name="facebook"
                  type="facebook"
                  value={facebook}
                  onChange={handleChange}
                  error={errors.facebook}
                ></TextFieldGroup>
                <TextFieldGroup
                  className="space1 space"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  type="linkedin"
                  value={linkedin}
                  onChange={handleChange}
                  error={errors.linkedin}
                ></TextFieldGroup>
                <TextFieldGroup
                  className="space1 space"
                  placeholder="Instagram URL"
                  name="instagram"
                  type="instagram"
                  value={instagram}
                  onChange={handleChange}
                  error={errors.instagram}
                ></TextFieldGroup>
              </div>
            ) : (
              <div>
                <Button onClick={handleSocial}>Optional</Button>{" "}
                <small>Click here to display Social Media Form</small>
              </div>
            )}
            <Button
              onClick={handleSubmit}
              className="registerbutton"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errorz: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(CreateProfile);
