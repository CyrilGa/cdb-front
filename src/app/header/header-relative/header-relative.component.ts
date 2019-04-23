import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-relative',
  templateUrl: './header-relative.component.html',
  styleUrls: ['./header-relative.component.scss']
})
export class HeaderRelativeComponent implements OnInit {

  constructor(private router: Router) {}

  goToLogin = function() {
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
    let isLogged: boolean = false;
  }

}
