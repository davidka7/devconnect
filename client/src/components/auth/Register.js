import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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
            {/* <Form.Label className="register1">Name</Form.Label> */}
            <Form.Control
              className={classnames("space1 space ", {
                "is-invalid": errors.name,
              })}
              type="text"
              onChange={handleChange}
              name="name"
              size="lg"
              placeholder="Enter name"
              value={name}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label className="register1">Email address</Form.Label> */}
            <Form.Control
              className={classnames("space1 space ", {
                "is-invalid": errors.email,
              })}
              type="email"
              size="lg"
              onChange={handleChange}
              name="email"
              placeholder="Enter email"
              value={email}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
            <Form.Text className="text-muted register2">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label className="register1">Password</Form.Label> */}
            <Form.Control
              size="lg"
              name="password"
              onChange={handleChange}
              className={classnames("space1 space ", {
                "is-invalid": errors.password,
              })}
              type="password"
              placeholder="Password"
              value={password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </Form.Group>
          {/* <Form.Label className="register1">Confirm Password</Form.Label> */}
          <Form.Group controlId="formBasicPassword2">
            <Form.Control
              size="lg"
              className={classnames("space1 space ", {
                "is-invalid": errors.password2,
              })}
              name="password2"
              onChange={handleChange}
              type="password"
              placeholder=" ConfirmPassword"
              value={password2}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
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
