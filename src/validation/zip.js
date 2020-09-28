function applyZipValidation(inputId, errorId, submitId) {
  const zip = document.getElementById(inputId);
  const zipError = document.getElementById(errorId);

  const submit = document.getElementById(submitId);

  const zipRegex = /^\d{4,6}$/;

  zip.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (zipIsValid() || zip.value === "") {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      zipError.innerHTML = "Good"; // Reset the content of the message
      zipError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the email field is valid, we let the form submit

    if (!zipRegex.test(zip.value) && zip.value !== "") {
      zipError.textContent = "Zipcode must be from 4 to 6 digits.";
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function zipIsValid() {
    if (!zipRegex.test(zip.value)) {
      // If the field doesn't contain an email address
      // display the following error message.
      zipError.textContent = "Zipcode must be from 4 to 6 digits.";
      return false;
    }
    return true;
  }

  function showError() {
    zipError.className = "error";
  }
}

export { applyZipValidation };
