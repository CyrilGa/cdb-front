import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username = '';
  password = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  login() {
    this.apiService.getCompanies().subscribe((response) => console.log(response));

    this.apiService.login(this.username, this.password).subscribe(response => console.log(response.token), error => console.log(error));
  }

}
