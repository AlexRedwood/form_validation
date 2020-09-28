import { applyEmailValidation } from "./email.js";
import { applyNameValidation } from "./name.js";
import { applyEmailConfirmationValidation } from "./email-confirmation.js";
import { applyCountryValidation } from "./country.js";
import { applyZipValidation } from "./zip.js";
import { applyPasswordValidation } from "./password.js";
import { applyPasswordConfirmationValidation } from "./password-confirmation.js";

export default function applyValidation() {
  applyEmailValidation("usermail", "mailerror", "submit");
  applyNameValidation("username", "nameError", "submit");
  applyEmailConfirmationValidation(
    "usermail-confirmation",
    "usermail-confirmation-error",
    "submit",
    "usermail"
  );
  applyCountryValidation("usercountry", "usercountry-error", "submit");
  applyZipValidation("userzipcode", "userzipcode-error", "submit");
  applyPasswordValidation("userpassword", "userpassword-error", "submit");
  applyPasswordConfirmationValidation(
    "userpassword-confirmation",
    "userpassword-confirmation-error",
    "submit",
    "userpassword"
  );
}
