import { Component, OnInit } from '@angular/core';
import {Computer} from '../model/computer.model';
import {ApiService} from '../../service/api.service';


@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})

export class ComputerListComponent implements OnInit {

  Mock = [
    {
        id: 18,
        name: 'COSMAC ELF',
        introduced: '',
        discontinued: '',
        company: {
            id: 3,
            name: 'RCA'
        }
    },
    {
        id: 19,
        name: 'COSM',
        introduced: '1977-01-02 01:00',
        discontinued: '',
        company: {
            id: 3,
            name: 'RCA'
        }
    },
    {
        id: 20,
        name: 'ELF II',
        introduced: '1977-01-01 01:00',
        discontinued: '',
        company: {
            id: 4,
            name: 'Netronics'
        }
    },
    {
        id: 22,
        name: 'Macintosh II',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    },
    {
        id: 24,
        name: 'Macintosh IIfx',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    },
    {
        id: 30,
        name: 'Xserve',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    },
    {
        id: 31,
        name: 'Powerbook 100',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    },
    {
        id: 32,
        name: 'Powerbook 140',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    },
    {
        id: 33,
        name: 'Powerbook 170',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    },
    {
        id: 34,
        name: 'PowerBook Duo',
        introduced: '',
        discontinued: '',
        company: {
            id: null,
            name: null
        }
    }
  ];

  computers: Computer[] = [];
  maxPage: number;

  constructor(private api: ApiService) { }

  ngOnInit() {
    /*this.api.getComputers({}).subscribe(
      (rslt) => {
        this.computers = rslt.body;
      },
      (error) => {
        console.log(error);
      }
    );*/
    this.Mock.forEach(
      computer => {
        this.computers.push(computer);
      }
    )
  }


  changePage($event) {
    this.api.getComputers($event).subscribe(
      result => {this.computers = result.body;
                 console.log(result.headers.get('MaxPageId'));
                 this.maxPage = +result.headers.get('MaxPageId'); },
      error => console.log(error)
    );
  }

  deleteComputer($event) {
    this.api.deleteComputer($event).subscribe(
      () => console.log('service'),
      error => console.log(error)
    );
  }
}
