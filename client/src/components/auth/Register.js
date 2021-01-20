import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "react-bootstrap/dist/react-bootstrap.min.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./auth.css";

import { set } from "mongoose";

function Register({ auth, registerUser, errorz, history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (errorz) {
      setErrors(errorz);
    }

    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "password2") {
      setPassword2(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };

    registerUser(newUser, history);
  };
  return (
    <div className="fullSize">
      <div className="register">
        <Form className="min-width">
          Sign Up
          <Form.Group controlId="formBasicName">
            <TextFieldGroup
              className="space1 space"
              placeholder="Enter Name"
              name="name"
              type="name"
              value={name}
              onChange={handleChange}
              error={errors.name}
            ></TextFieldGroup>
          </Form.Group>
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
            <Form.Text className="text-muted register2">
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Form.Group controlId="formBasicPassword2">
            <TextFieldGroup
              className="space1 space"
              placeholder="Confirm Password"
              name="password2"
              type="password2"
              value={password2}
              onChange={handleChange}
              error={errors.password2}
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errorz: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errorz: state.error,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
