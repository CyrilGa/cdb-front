import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent implements OnInit {

  @Input computer: Computer;

  constructor() { }

  ngOnInit() {
  }

  deleteComputer(computer) {

  }

}
