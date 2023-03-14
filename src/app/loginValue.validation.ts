import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

/**
 * Check if control value is inferior to date in parameter
 * @export
 */

export function isRequiredValidator(
  title: string,
  identifiant: string
): ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const titleControl = control.get(title);
    const identifiantControl = control.get(identifiant);

    // parse control value to Date
    // check if control value is superior to date given in parameter
    if (titleControl || identifiantControl) {
      return null;
    } else {
      return { isRequired: true };
    }
  };
}
