import { applyEmailValidation } from "./email.js";
import { applyNameValidation } from "./name.js";
import { applyEmailConfirmationValidation } from "./email-confirmation.js";

import getCountryList from "./country-list.js";

export default function applyValidation() {
  applyEmailValidation("usermail", "mailerror", "submit");
  applyNameValidation("username", "nameError", "submit");
  applyEmailConfirmationValidation(
    "usermail-confirmation",
    "usermail-confirmation-error",
    "submit",
    "usermail"
  );
}
