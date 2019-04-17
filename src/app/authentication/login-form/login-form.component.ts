import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Company} from '../../computer/model/company.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  companies: Company[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {  }

}
