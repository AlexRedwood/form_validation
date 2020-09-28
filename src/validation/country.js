import { getCountryList } from "./country-list.js";

function applyCountryValidation(inputId, errorId, submitId) {
  const country = document.getElementById(inputId);
  const countryError = document.getElementById(errorId);

  const submit = document.getElementById(submitId);

  country.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (countryIsValid() || country.value === "") {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      countryError.innerHTML = "Good"; // Reset the content of the message
      countryError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the email field is valid, we let the form submit

    if (!getCountryList().includes(country.value) && country.value !== "") {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function countryIsValid() {
    if (!getCountryList().includes(country.value)) {
      countryError.textContent = `Country must start with capital letter and exist.`;
      return false;
    }

    return true;
  }

  function showError() {
    countryError.className = "error";
  }
}

export { applyCountryValidation };
