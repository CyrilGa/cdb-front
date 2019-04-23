import { Component, OnInit } from '@angular/core';
import {Computer} from '../model/computer.model';
import {ApiService} from '../../service/api.service';


@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})

export class ComputerListComponent implements OnInit {

  computers: Computer[] = [];

  maxPage: number;
  currentPage: number;
  elements: number;

  searchName: string;
  sort: any;


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getComputers({}).subscribe(
      (rslt) => {
        this.computers = rslt.body;
      },
      (error) => {
        console.log(error);
      }
    );

    this.currentPage = 0;
    this.searchName = null;
    this.sort = null;
  }

  getComputers() {
    const params = {
      numberOfElements: this.elements,
      desiredPage: this.currentPage,
      sort: this.sort,
      searchName: this.searchName
    };
    console.log(params);
    this.api.getComputers(params).subscribe(
      result => {this.computers = result.body;
                 console.log(result.headers.get('MaxPageId'));
                 this.maxPage = +result.headers.get('MaxPageId'); },
      error => console.log(error)
    );
  }

  changePage($event) {
    console.log('change page: ' + $event);
    this.currentPage = $event;
    this.getComputers();
  }

  changeElements($event) {
    console.log('change elements: ' + $event);
    this.elements = $event;
    this.currentPage = 0;
    this.getComputers();
  }

  changeSort($event) {
    console.log('change sort: ' + $event);
    this.sort = $event;
    this.currentPage = 0;
    this.getComputers();
  }

  changeSearch($event) {
    console.log('change search: ' + $event);
    this.searchName = $event;
    this.currentPage = 0;
    this.getComputers();
  }

  deleteComputer($event) {
    this.api.deleteComputer($event).subscribe(
      () => console.log('service'),
      error => console.log(error)
    );
  }

}
