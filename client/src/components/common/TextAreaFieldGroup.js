import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,

  error,
  info,

  onChange,
}) => {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        {" "}
        {/* <Form.Label className="register1">Email address</Form.Label> */}
        <textarea
          className={classnames("space1 space ", {
            "is-invalid": error,
          })}
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

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,

  onChange: PropTypes.func.isRequired,
};

export default TextAreaFieldGroup;
