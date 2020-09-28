function applyNameValidation(inputId, errorId, submitId) {
  const name = document.getElementById(inputId);
  const nameError = document.getElementById(errorId);

  const submit = document.getElementById(submitId);

  const nameRegex = /^[A-Za-z][A-Za-z0-9]*$/;

  name.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (nameIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      nameError.innerHTML = "Good"; // Reset the content of the message
      nameError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the email field is valid, we let the form submit

    if (!nameIsValid()) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function nameIsValid() {
    if (name.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      nameError.textContent = "Please fill out this field";
      return false;
    } else if (!nameRegex.test(name.value)) {
      // If the field doesn't contain an email address
      // display the following error message.
      nameError.textContent =
        "First letter must be english letter, then english letters or numbers.";
      return false;
    } else if (name.validity.tooShort) {
      // If the data is too short
      // display the following error message.
      nameError.textContent = `Name should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
      return false;
    } else if (name.validity.tooLong) {
      // FYI name can be from 3 to 254 characters long
      // If the data is too short
      // display the following error message.
      nameError.textContent = `Name should be less than ${name.maxLength} characters; you entered ${name.value.length}.`;
      return false;
    }

    return true;
  }

  function showError() {
    nameError.className = "error";
  }
}

export { applyNameValidation };
