import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ComputerEdit } from '../model/computerEdit.model';
import { Company } from '../model/company.model';
import { SessionService } from 'src/app/authentication/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Computer } from '../model/computer.model';

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.scss']
})
export class ComputerFormComponent implements OnInit {

  
  @Output() cancelAdd = new EventEmitter();

  @Output() addComputer = new EventEmitter();

  @Input() companies: Company [];

  newComputer: ComputerEdit = {
    id: -1,
    name:"",
    introducedDate: "",
    introducedHour: "",
    discontinuedDate: "",
    discontinuedHour: "",
    company: {
      id: -1,
      name: "",
    }

  };

  companyForm: FormGroup;


  constructor(private api:ApiService, private sessionService: SessionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      companyControl: [this.newComputer.company.name]
    });
  }

  invExpanded() {
    this.cancelAdd.emit();
    this.companyForm.controls["companyControl"].patchValue("");
  }

  add(){

    let computerName = this.newComputer.name;

    let introduced =
      this.newComputer.introducedDate
      + " "
      + this.newComputer.introducedHour;
    
    introduced = introduced.trim()

    let discontinued =
      this.newComputer.discontinuedDate
      + " "
      + this.newComputer.discontinuedHour;

      discontinued = discontinued.trim()

    let companyName = this.newComputer.company.name;

    let computer: Computer = {
      id: -1,
      name: computerName,
      introduced: introduced,
      discontinued: discontinued,
      company: {
        id: -1,
        name: companyName
      }
    }

    console.log(computer)

    this.invExpanded();
    this.addComputer.emit(computer);
  }

}
