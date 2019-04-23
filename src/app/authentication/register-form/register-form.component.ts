import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  username = '';
  password = '';
  passwordRepeat = '';
  canRegister = false;

  constructor(private apiService: ApiService, private sessionService: SessionService, private router: Router) {
  }

  ngOnInit() {
    if (this.sessionService.getUserToken() !== null) {
      this.router.navigate(['/']);
    }
  }

  register() {
    if (this.password === this.passwordRepeat) {
      this.apiService.register(this.username, this.password).subscribe(response => alert('success'));
    }
  }

  onPasswordInputChange($event) {
    if ($event === this.passwordRepeat) {
      this.canRegister = true;
    } else {
      this.canRegister = false;
    }
  }

  onPasswordRepeatInputChange($event) {
    if (this.password === $event) {
      this.canRegister = true;
    } else {
      this.canRegister = false;
    }
  }
}
