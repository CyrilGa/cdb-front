import {Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges} from '@angular/core';

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

  constructor() {
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
    console.log(this.currentPage);
    this.changePage.emit(this.currentPage + 1);
  }

  setNumberOfElements(elements: number) {
    this.numberOfElements = elements;
    this.changeNumberOfElements.emit(this.numberOfElements);
  }

}
