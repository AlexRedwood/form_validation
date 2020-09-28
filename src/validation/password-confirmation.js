function applyPasswordConfirmationValidation(
  inputId,
  errorId,
  submitId,
  passwordId
) {
  const passwordConfirmation = document.getElementById(inputId);

  const passwordConfirmationError = document.getElementById(errorId);
  const password = document.getElementById(passwordId);

  const submit = document.getElementById(submitId);

  password.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (inputIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      passwordConfirmationError.innerHTML = "Good"; // Reset the content of the message
      passwordConfirmationError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  passwordConfirmation.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (inputIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      passwordConfirmationError.innerHTML = "Good"; // Reset the content of the message
      passwordConfirmationError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the password field is valid, we let the form submit

    if (!inputIsValid()) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function inputIsValid() {
    if (passwordConfirmation.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      passwordConfirmationError.textContent = "Please fill out this field";
      return false;
    } else if (passwordConfirmation.value != password.value) {
      passwordConfirmationError.textContent =
        "Value is not the same as in Password field";
      return false;
    }

    return true;
  }

  function showError() {
    passwordConfirmationError.className = "error";
  }
}

export { applyPasswordConfirmationValidation };
