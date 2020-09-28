function applyEmailValidation(inputId, errorId, submitId) {
  const email = document.getElementById(inputId);
  const emailError = document.getElementById(errorId);

  const submit = document.getElementById(submitId);

  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  email.addEventListener("input", function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (mailIsValid()) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.innerHTML = "Good"; // Reset the content of the message
      emailError.className = "valid"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  submit.addEventListener("click", function(event) {
    // if the email field is valid, we let the form submit

    if (!mailIsValid()) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function mailIsValid() {
    if (email.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      emailError.textContent = "Please fill out this field";
      return false;
    } else if (!emailRegex.test(email.value)) {
      // If the field doesn't contain an email address
      // display the following error message.
      emailError.textContent = "Entered value needs to be an e-mail address.";
      return false;
    } else if (email.validity.tooShort) {
      // FYI email can be from 3 to 254 characters long
      // If the data is too short
      // display the following error message.
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      return false;
    } else if (email.validity.tooLong) {
      // FYI email can be from 3 to 254 characters long
      // If the data is too short
      // display the following error message.
      emailError.textContent = `Email should be less than ${email.maxLength} characters; you entered ${email.value.length}.`;
      return false;
    }

    return true;
  }

  function showError() {
    emailError.className = "error";
  }
}

export { applyEmailValidation };
