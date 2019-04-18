import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Computer } from '../model/computer.model';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})

export class ComputerListComponent implements OnInit {

  Mock = [
    {
        id: '18',
        name: 'COSMAC ELF',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: '3',
            name: 'RCA'
        }
    },
    {
        id: '19',
        name: 'COSM',
        introduced: '1977-01-02 01:00',
        discontinued: '',
        companyDTO: {
            id: '3',
            name: 'RCA'
        }
    },
    {
        id: '20',
        name: 'ELF II',
        introduced: '1977-01-01 01:00',
        discontinued: '',
        companyDTO: {
            id: '4',
            name: 'Netronics'
        }
    },
    {
        id: '22',
        name: 'Macintosh II',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    },
    {
        id: '24',
        name: 'Macintosh IIfx',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    },
    {
        id: '30',
        name: 'Xserve',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    },
    {
        id: '31',
        name: 'Powerbook 100',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    },
    {
        id: '32',
        name: 'Powerbook 140',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    },
    {
        id: '33',
        name: 'Powerbook 170',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    },
    {
        id: '34',
        name: 'PowerBook Duo',
        introduced: '',
        discontinued: '',
        companyDTO: {
            id: null,
            name: null
        }
    }
  ];

  listComputer: Computer[] = [];
  computers = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    /*this.api.getComputers().subscribe(
      (rslt) => {
        this.listComputer = rslt;
      },
      (error) => {
        console.log(error);
      }
    );*/
    this.Mock.forEach(element => {
      this.computers.push(element);
      console.log(element);
    });
  }


  changePage($event) {

  }
}
