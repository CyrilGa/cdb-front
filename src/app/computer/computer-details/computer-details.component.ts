import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Computer } from '../model/computer.model';
import { Company } from '../model/company.model';
import { ApiService } from 'src/app/service/api.service';
import { SessionService } from '../../authentication/session.service';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent {

  introducedDate: string;
  discontinuedDate: string;
  introducedHour: string;
  discontinuedHour: string;
  companies: Company[];

  isExpanded = false;

  constructor(private api: ApiService, private sessionService: SessionService) { }

  @Input()
  computer: Computer;

  @Output() deleteComputer = new EventEmitter();

  onEdit(computer: Computer): void {
    let e: HTMLInputElement;
    e = <HTMLInputElement>document.getElementById("computerNameInput");
    e.value = this.computer.name;
    e = <HTMLInputElement>document.getElementById("introducedDateInput");
    e.value = this.computer.introduced.substring(0, 10);
    e = <HTMLInputElement>document.getElementById("introducedHourInput");
    e.value = this.computer.introduced.substring(11);
    e = <HTMLInputElement>document.getElementById("discontinuedDateInput");
    e.value = this.computer.discontinued.substring(0, 10);
    e = <HTMLInputElement>document.getElementById("discontinuedHourInput");
    e.value = this.computer.discontinued.substring(11);
    this.loadCompanies();
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

}
