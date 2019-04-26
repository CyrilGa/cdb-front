import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.isAsc = true;
    this.sortName = 'id';
  }

  toggleAsc() {
    this.isAsc = !this.isAsc;
    this.doSort();
  }

  doSearch() {
    this.search.emit(this.searchName);
  }

  doSort() {
    this.sort.emit({
      sortName: this.sortName,
      sortType: this.isAsc ? 'ASC' : 'DESC'
    });
  }

  changeSearchName($event) {
    this.searchName = $event.target.value;
  }
}
