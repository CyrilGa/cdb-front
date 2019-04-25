import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SessionService} from '../../authentication/session.service';

@Component({
  selector: 'app-header-relative',
  templateUrl: './header-relative.component.html',
  styleUrls: ['./header-relative.component.scss']
})
export class HeaderRelativeComponent {

  constructor(private router: Router, private translate: TranslateService, private sessionService: SessionService) {
  }

  logout() {
    this.sessionService.invalidateUser();
    this.router.navigateByUrl('/?refresh=1');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  isLoggedIn(): boolean {
    return this.sessionService.getUserToken() !== null;
  }
}
