import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  FormControl,
} from '@angular/forms';

/**
 * Check if control value is inferior to date in parameter
 * @export
 */
export function rangeDateValidator(
  min: Date,
  max: Date
): ValidationErrors | null {
  // parse control value to Date
  // if(control.value === null ){
  //   return null;
  // }
  return (control: AbstractControl): ValidationErrors | null => {
    const dateControl: Date = new Date(control.value);
    const today: Date = new Date(max);
    const date1: Date = new Date(min);
    // check if control value is superior to date given in parameter
    if (date1 <= dateControl && dateControl <= today) {
      return { 'min' : min , max};
    } else {
      return null;
    }
  }
}
