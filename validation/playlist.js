const Validator = require("validator");
const isEmpty = require("../validation/is-empty")

module.exports = function validatePlaylistInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.text = !isEmpty(data.text) ? data.text : "";

  
  // text checks
  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};