const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatePetForSaleInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.species = !isEmpty(data.species) ? data.species : "";
  data.cost = !isEmpty(data.cost) ? data.cost : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.species)) {
    errors.species = "Species field is required";
  }
  if (Validator.isEmpty(data.cost)) {
    errors.cost = "Cost field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
