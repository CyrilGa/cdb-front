import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-relative',
  templateUrl: './header-relative.component.html',
  styleUrls: ['./header-relative.component.scss']
})
export class HeaderRelativeComponent implements OnInit {

  constructor(private router: Router, private translate: TranslateService) {
  }

  goToLogin = function() {
    this.router.navigateByUrl("/login");
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    let isLogged: boolean = false;
  }
}
