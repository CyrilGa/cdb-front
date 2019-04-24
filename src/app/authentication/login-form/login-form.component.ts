import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../../custom-material/snackbar/snackbar.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username = '';
  password = '';

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

  login() {
    this.apiService.login(this.username, this.password).subscribe(response => {
      this.sessionService.saveUser(response);
      this.router.navigate(['/']);
    }, error => {
      this.sessionService.invalidateUser();

      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 5 * 1000,
        panelClass: ['snackbar-error'],
        data: 'Incorrect login/password'
      });
    });
  }
}
