import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, FormGroup } from '@angular/forms';

export function emailValidator(regexp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }

    console.info('VALUE ===== ' + regexp.test(value))
    return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
  };
}
@Directive({
  selector: '[appEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
  @Input() emailValidator: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.emailValidator ? emailValidator(new RegExp(this.emailValidator, 'i'))(control)
      : null;
  }
}
