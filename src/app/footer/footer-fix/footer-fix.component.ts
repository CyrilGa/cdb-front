import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-footer-fix',
  templateUrl: './footer-fix.component.html',
  styleUrls: ['./footer-fix.component.scss']
})
export class FooterFixComponent implements OnInit {

  @Input() maxPage: number;

  @Output() pagination = new EventEmitter();

  currentPage: number;
  numberOfElements: number;

  constructor() {
    this.currentPage = 0;
    this.numberOfElements = 10;
  }

  ngOnInit() {
  }

  sendPagination() {
    this.pagination.emit({
      numberOfElements: this.numberOfElements,
      desiredPage: this.currentPage
    });
  }

  getFirstPage() {
    this.currentPage = 0;
    this.sendPagination();
  }

  getLastPage() {
    this.currentPage = this.maxPage;
    this.sendPagination();
  }

  getPreviousPage() {
    this.currentPage = this.currentPage === 0 ? 0 : this.currentPage - 1;
    this.sendPagination();
  }

  getNextPage() {
    this.currentPage = this.currentPage === this.maxPage ? this.maxPage : this.currentPage + 1;
    this.sendPagination();
  }

  setNumberOfElements(elements: number) {
    this.numberOfElements = elements;
    this.currentPage = 0;
    this.sendPagination();
  }

}
