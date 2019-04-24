import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Computer } from '../model/computer.model';
import { Company } from '../model/company.model';
import { ApiService } from 'src/app/service/api.service';
import { SessionService } from '../../authentication/session.service';
import { ComputerEdit } from '../model/computerEdit.model';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent {

  companies: Company[];
  
  computerEdit: ComputerEdit = 
  {
    id: -1,
    name: "",
    introducedDate: "",
    introducedHour: "",
    discontinuedDate: "",
    discontinuedHour: "",
    company: {
      id: -1,
      name: ""
    }
  };

  isExpanded = false;

  constructor(private api: ApiService, private sessionService: SessionService) { }

  @Input()
  computer: Computer;

  @Output() deleteComputer = new EventEmitter();

  @Output() saveComputer = new EventEmitter();

  onEdit(computer: Computer): void {
    this.loadCompanies();
    let e: HTMLInputElement;
    this.computerEdit.name = this.computer.name;
    this.computerEdit.introducedDate = this.computer.introduced.substring(0, 10);
    this.computerEdit.introducedHour = this.computer.introduced.substring(11);
    this.computerEdit.discontinuedDate = this.computer.discontinued.substring(0, 10);
    this.computerEdit.discontinuedHour = this.computer.discontinued.substring(11);
    this.computerEdit.company.name = this.computer.company.name;
  }

  loadCompanies(): void {
    this.api.getCompanies().subscribe(
      (companies) => this.companies = companies,
      error => console.log(error)
    );
  }

  delete() {
    this.deleteComputer.emit(this.computer.id);
  }

  invExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  getUserRole(): string {
    return this.sessionService.getUserRole();
  }

  save() {
    let computerName = (<HTMLInputElement>document.getElementById("computerNameInput")).value;

    let introduced =
      (<HTMLInputElement>document.getElementById("introducedDateInput")).value
      + " "
      + (<HTMLInputElement>document.getElementById("introducedHourInput")).value;

    let discontinued =
      (<HTMLInputElement>document.getElementById("discontinuedDateInput")).value
      + " "
      + (<HTMLInputElement>document.getElementById("discontinuedHourInput")).value;

    let companyName = (<HTMLInputElement>document.getElementById("companyName")).value;

    let computer: Computer = {
      id: this.computer.id,
      name: computerName,
      introduced: introduced,
      discontinued: discontinued,
      company: {
        id: -1,
        name: companyName
      }
    }

    this.saveComputer.emit(computer);
  }

}
