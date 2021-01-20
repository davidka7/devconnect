import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        {" "}
        {/* <Form.Label className="register1">Email address</Form.Label> */}
        <Form.Control
          className={classnames("space1 space ", {
            "is-invalid": error,
          })}
          type={type}
          size="lg"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {info && <small className="from-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </Form.Group>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string.isRequired,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
