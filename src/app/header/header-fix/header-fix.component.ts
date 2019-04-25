import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  searchName: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.isAsc = true;
  }

  toggleAsc() {
    this.isAsc = !this.isAsc;
  }

  doSearch() {
    this.sort.emit({
      searchName: this.searchName
    });
  }

  doSort() {
    this.sort.emit({
      sortName: this.sortName,
      sortType: this.isAsc ? "ASC" : "DESC"
    });
  }
}
