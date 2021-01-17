import React, { useState } from "react";
import classnames from "classnames";
import "react-bootstrap/dist/react-bootstrap.min.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./auth.css";
function Login() {
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
  const handleSubmit = (e) => {
    e.preventDefault(e);
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
  };
  return (
    <div>
      <div className="register">
        <Form className="min-width">
          Login
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label className="register1">Name</Form.Label> */}

            {/* <Form.Label className="register1">Email address</Form.Label> */}
            <Form.Control
              className={classnames("space1 space ", {
                "is-invalid": errors.email,
              })}
              type="email"
              size="lg"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={email}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label className="register1">Password</Form.Label> */}
            <Form.Control
              className={classnames("space1 space ", {
                "is-invalid": errors.password,
              })}
              onChange={handleChange}
              size="lg"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            {/* <Form.Label className="register1">Confirm Password</Form.Label> */}
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

export default Login;
