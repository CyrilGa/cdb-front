import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SessionService} from "../../authentication/session.service";

@Component({
  selector: 'app-header-relative',
  templateUrl: './header-relative.component.html',
  styleUrls: ['./header-relative.component.scss']
})
export class HeaderRelativeComponent {

  constructor(private router: Router, private sessionService: SessionService) {}

  goToLogin = function() {
    this.router.navigateByUrl('/login');
  }

  goToSignUp = function() {
    this.router.navigateByUrl('/register');
  }

  logout = function() {
    this.sessionService.invalidateUser();
    this.router.navigateByUrl('/');
  }

  isLoggedIn(): boolean {
    return this.sessionService.getUserToken() !== null;
  }

}
