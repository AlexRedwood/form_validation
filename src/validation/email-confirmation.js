function applyEmailConfirmationValidation(inputId, errorId, submitId, emailId) {
  const emailConfirmation = document.getElementById(inputId);

  const emailConfirmationError = document.getElementById(errorId);
  const email = document.getElementById(emailId);

  const submit = document.getElementById(submitId);

  email.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (inputIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailConfirmationError.innerHTML = "Good"; // Reset the content of the message
      emailConfirmationError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  emailConfirmation.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (inputIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailConfirmationError.innerHTML = "Good"; // Reset the content of the message
      emailConfirmationError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the email field is valid, we let the form submit

    if (!inputIsValid()) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function inputIsValid() {
    if (emailConfirmation.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      emailConfirmationError.textContent = "Please fill out this field";
      return false;
    } else if (emailConfirmation.value != email.value) {
      emailConfirmationError.textContent =
        "Value is not the same as in E-mail field";
      return false;
    }

    return true;
  }

  function showError() {
    emailConfirmationError.className = "error";
  }
}

export { applyEmailConfirmationValidation };
