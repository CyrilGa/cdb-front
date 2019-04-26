import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Computer } from '../model/computer.model';
import { Company } from '../model/company.model';
import { ApiService } from 'src/app/service/api.service';
import { SessionService } from '../../authentication/session.service';
import { ComputerEdit } from '../model/computerEdit.model';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  companyForm: FormGroup;

  constructor(private api: ApiService, private sessionService: SessionService, private formBuilder: FormBuilder) { };

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      companyControl: [this.computerEdit.company.name]
    });
  }

  @Input()
  computer: Computer;

  @Output() deleteComputer = new EventEmitter();

  @Output() saveComputer = new EventEmitter();

  onEdit(computer: Computer): void {
    this.loadCompanies();
    this.computerEdit.name = this.computer.name;
    this.computerEdit.introducedDate = this.computer.introduced.substring(0, 10);
    this.computerEdit.introducedHour = this.computer.introduced.substring(11);
    this.computerEdit.discontinuedDate = this.computer.discontinued.substring(0, 10);
    this.computerEdit.discontinuedHour = this.computer.discontinued.substring(11);
    this.computerEdit.company.name = this.computer.company.name;
    this.companyForm.controls["companyControl"].patchValue(this.computerEdit.company.name);
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
    let computerName = this.computerEdit.name;

    let introduced =
      this.computerEdit.introducedDate
      + " "
      + this.computerEdit.introducedHour;
    
    if (introduced === " "){
      introduced = "";
    }

    let discontinued =
      this.computerEdit.discontinuedDate
      + " "
      + this.computerEdit.discontinuedHour;

      if (discontinued === " "){
        discontinued = "";
      }

    let companyName = this.computerEdit.company.name;

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

    this.computer = computer;
    this.invExpanded();

    setTimeout(() => this.saveComputer.emit(computer), 1000);


  }

  

}
