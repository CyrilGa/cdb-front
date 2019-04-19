import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-fix',
  templateUrl: './footer-fix.component.html',
  styleUrls: ['./footer-fix.component.scss']
})
export class FooterFixComponent implements OnInit {

  @Output() pagination = new EventEmitter();

  currentPage: number;
  maxPage: number;
  numberOfElements: number;

  constructor() {
    this.currentPage = 0;
    this.numberOfElements = 10;
  }

  ngOnInit() {
  }

  sendPagination(dPage: number) {
    this.pagination.emit({
      numberOfElements: this.numberOfElements,
      desiredPage: dPage
    });
  }

  getFirstPage() {
    this.sendPagination(0);
  }

  getLastPage() {
    this.sendPagination(this.maxPage);
  }

  getPreviousPage() {
    this.sendPagination(this.currentPage === 0 ? 0 : this.currentPage - 1);
  }

  getNextPage() {
    this.sendPagination(this.currentPage === this.maxPage ? this.maxPage : this.currentPage + 1);
  }

  setNumberOfElements(elements: number) {
    this.numberOfElements = elements;
    this.sendPagination(0);
  }

}
