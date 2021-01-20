const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatePetInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.species = !isEmpty(data.species) ? data.species : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.species)) {
    errors.species = "Species field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
