import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registrationForm = this.fb.group({
    businessName: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    emailVerify: [''],
    password: [''],
    passwordVerify: [''],
    mobilePhoneNumber: ['', Validators.minLength(10)],
    businessPhoneNumber: ['', Validators.minLength(10)],
    businessExt: [''],
    addressLineOne: [''],
    addressLineTwo: [''],
    city: [''],
    state: [''],
    zipCode: ['', Validators.minLength(5)]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {

  }

  get password() {
    return this.registrationForm.get('password');
  }

  get passwordVerify() {
    return this.registrationForm.get('passwordVerify');
  }
}
