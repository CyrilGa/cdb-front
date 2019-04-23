import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-fix',
  templateUrl: './header-fix.component.html',
  styleUrls: ['./header-fix.component.scss']
})
export class HeaderFixComponent implements OnInit {

  @Output()
  sort = new EventEmitter();

  @Output()
  search = new EventEmitter();

  sortName: string;
  isAsc: boolean;
  searchName: string;

  constructor() { }

  ngOnInit() {
    this.isAsc = true;
  }

  toggleAsc() {
    this.isAsc = !this.isAsc;
  }

  doSearch() {
    this.search.emit(this.searchName);
  }

  doSort() {
    this.sort.emit({
      sortName: this.sortName,
      sortType: this.isAsc ? "ASC" : "DESC"
    });
  }

  changeSearchName($event) {
    this.searchName = $event.target.value;
  }
}
