import {Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-fix',
  templateUrl: './footer-fix.component.html',
  styleUrls: ['./footer-fix.component.scss']
})
export class FooterFixComponent implements OnInit {

  @Input() maxPage: number;

  @Input() currentPage: number;

  @Output() changePage = new EventEmitter();

  @Output() changeNumberOfElements = new EventEmitter();

  numberOfElements: number;

  constructor(private translate: TranslateService) {
    this.currentPage = 0;
    this.numberOfElements = 10;
  }

  ngOnInit() {
  }

  getFirstPage() {
    this.changePage.emit(0);
  }

  getLastPage() {
    this.changePage.emit(this.maxPage);
  }

  getPreviousPage() {
    this.changePage.emit(this.currentPage === 0 ? 0 : this.currentPage - 1);
  }

  getNextPage() {
    this.changePage.emit(this.currentPage === this.maxPage ? this.maxPage : this.currentPage + 1);
  }

  setNumberOfElements(elements: number) {
    this.numberOfElements = elements;
    this.changeNumberOfElements.emit(this.numberOfElements);
  }

}
