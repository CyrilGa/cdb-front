import { Injectable } from '@angular/core';
import {JwtToken} from './model/jwt-token.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  TOKEN_FIELD = 'token';
  USERNAME_FIELD = 'username';
  ROLE_FIELD = 'role';

  constructor() { }

  invalidateUser() {
    sessionStorage.removeItem(this.TOKEN_FIELD);
    sessionStorage.removeItem(this.USERNAME_FIELD);
    sessionStorage.removeItem(this.ROLE_FIELD);
  }

  saveUser(user: JwtToken) {
    this.invalidateUser();
    sessionStorage.setItem(this.TOKEN_FIELD, user.token);
    sessionStorage.setItem(this.USERNAME_FIELD, user.username);
    sessionStorage.setItem(this.ROLE_FIELD, user.role);
  }

  getUserToken() {
    return sessionStorage.getItem(this.TOKEN_FIELD);
  }

  getUsername() {
    return sessionStorage.getItem(this.USERNAME_FIELD);
  }

  getUserRole() {
    return sessionStorage.getItem(this.ROLE_FIELD);
  }
}
