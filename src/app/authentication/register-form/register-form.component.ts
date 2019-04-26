import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';
import {SnackbarComponent} from '../../custom-material/snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  username = '';
  password = '';
  passwordRepeat = '';
  goodUsernameLength = false;
  passwordMatch = false;

  constructor(private snackBar: MatSnackBar,
              private apiService: ApiService,
              private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.sessionService.getUserToken() !== null) {
      this.router.navigate(['/']);
    }
  }

  register() {
    if (this.password === this.passwordRepeat) {
      this.apiService.register(this.username, this.password).subscribe(response => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5 * 1000,
            panelClass: ['snackbar', 'snackbar-success'],
            data: 'Successfully registered'
          });

          this.username = '';
          this.password = '';
          this.passwordRepeat = '';
        },
        error => {
          let errorMessage = '';
          switch (error.error.messsage) {
            case 'ValidationException':
              errorMessage = 'The field sizes must be > 2';
              break;
            case 'UpdateException':
              errorMessage = 'The username is already taken';
              break;
          }

          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5 * 1000,
            panelClass: ['snackbar', 'snackbar-error'],
            data: errorMessage
          });
        });
    }
  }

  onUsernameInputChange($event) {
    if ($event.length > 0) {
      this.goodUsernameLength = true;
    } else {
      this.goodUsernameLength = false;
    }
  }

  onPasswordInputChange($event) {
    if ($event === this.passwordRepeat) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  onPasswordRepeatInputChange($event) {
    if (this.password === $event) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  canRegister() {
    return this.goodUsernameLength && this.passwordMatch;
  }
}
