function applyPasswordValidation(inputId, errorId, submitId) {
  const password = document.getElementById(inputId);
  const passwordError = document.getElementById(errorId);

  const submit = document.getElementById(submitId);

  const passwordRegex = /^[A-Za-z0-9]*$/;

  password.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (passwordIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      passwordError.innerHTML = "Good"; // Reset the content of the message
      passwordError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the email field is valid, we let the form submit

    if (!passwordIsValid()) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function passwordIsValid() {
    if (password.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      passwordError.textContent = "Please fill out this field";
      return false;
    } else if (!passwordRegex.test(password.value)) {
      // If the field doesn't contain an email address
      // display the following error message.
      passwordError.textContent =
        "Password must onclude only english letters and numbers.";
      return false;
    } else if (password.validity.tooShort) {
      // If the data is too short
      // display the following error message.
      passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
      return false;
    } else if (password.validity.tooLong) {
      // FYI password can be from 3 to 254 characters long
      // If the data is too short
      // display the following error message.
      passwordError.textContent = `Password should be less than ${password.maxLength} characters; you entered ${password.value.length}.`;
      return false;
    }

    return true;
  }

  function showError() {
    passwordError.className = "error";
  }
}

export { applyPasswordValidation };
