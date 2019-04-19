import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-fix',
  templateUrl: './header-fix.component.html',
  styleUrls: ['./header-fix.component.scss']
})
export class HeaderFixComponent implements OnInit {

  @Output()
  sort = new EventEmitter();

  sortName: string;
  isAsc: boolean;

  constructor() { }

  ngOnInit() {
    this.isAsc = true;
  }

  getSortName(sortName: string) {
    this.sortName = sortName;
  }

  toggleAsc() {
    this.isAsc = !this.isAsc;
  }

  doSort() {
    this.sort.emit({
      sortName: this.sortName,
      sortType: this.isAsc ? "ASC" : "DESC"
    });
  }
}
