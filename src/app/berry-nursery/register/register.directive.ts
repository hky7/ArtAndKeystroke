import { Directive } from '@angular/core';
import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appRegister]'
})
export class RegisterDirective {

  constructor() { }

  get verifyPasswords(): ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const passwordVerify = control.get('passwordVerify');

    return password === passwordVerify;
  }
}
