import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
  ngOnInit() {
  }

}
