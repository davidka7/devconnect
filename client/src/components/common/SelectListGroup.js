import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
const SelectListGroup = ({
  name,

  value,

  error,
  info,

  onChange,
  options,
}) => {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        {" "}
        {/* <Form.Label className="register1">Email address</Form.Label> */}
        <select
          className={classnames("space1 space ", {
            "is-invalid": error,
          })}
          size="lg"
          name={name}
          onChange={onChange}
          value={value}
        />
        {info && <small className="from-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </Form.Group>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,

  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,

  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectListGroup;
