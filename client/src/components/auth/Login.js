import React, { useState, useEffect } from "react";

import TextFieldGroup from "../common/TextFieldGroup";
import "react-bootstrap/dist/react-bootstrap.min.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import "./auth.css";
function Login({ loginUser, auth, errorz, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
    if (errorz) {
      setErrors(errorz);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault(e);
    const user = {
      email: email,
      password: password,
    };
    loginUser(user);
  };
  return (
    <div>
      <div className="register">
        <Form className="min-width">
          Login
          <Form.Group controlId="formBasicEmail">
            <TextFieldGroup
              className="space1 space"
              placeholder="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              error={errors.email}
            ></TextFieldGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <TextFieldGroup
              className="space1 space"
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              error={errors.password}
            ></TextFieldGroup>
          </Form.Group>
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
  );
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errorz: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errorz: state.error,
});

export default connect(mapStateToProps, { loginUser })(Login);
