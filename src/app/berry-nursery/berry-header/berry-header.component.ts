import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-berry-header',
  templateUrl: './berry-header.component.html',
  styleUrls: ['./berry-header.component.sass'],
  providers: [AngularFireAuth]
})
export class BerryHeaderComponent implements OnInit {
  @Input() open;
  isLoggedIn;
  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    if (this.isLoggedIn) {
      this.loginLogoutBtn = 'Logout';
    } else {
        this.loginLogoutBtn = 'Login';
      }
    }

    onLoginLogoutSubmit() {
      if (this.isLoggedIn) {
        this.authService.logout();
      } else {
        this.router.navigate(['berry-nursery/login']);
      }
    }
}
