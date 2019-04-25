import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-relative',
  templateUrl: './footer-relative.component.html',
  styleUrls: ['./footer-relative.component.scss']
})
export class FooterRelativeComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

}
