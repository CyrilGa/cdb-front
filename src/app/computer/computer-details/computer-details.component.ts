import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Computer } from '../model/computer.model';
import { Company } from '../model/company.model';
import { ApiService } from 'src/app/service/api.service';
import {SessionService} from '../../authentication/session.service';

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

  constructor(private api: ApiService, private sessionService: SessionService) {}

  @Input()
  computer: Computer;

  @Output() deleteComputer = new EventEmitter();

  onEdit(computer: Computer): void {
    this.introducedDate = computer.introduced.substring(0, 10);
    this.discontinuedDate = computer.discontinued.substring(0, 10);
    this.introducedHour = computer.introduced.substring(11);
    this.discontinuedHour = computer.discontinued.substring(11);
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.api.getCompanies().subscribe(
      (companies) => this.companies = companies ,
      error => console.log(error)
    );
  }

  delete() {
    this.deleteComputer.emit(this.computer.id);
  }

  getUserRole(): string {
    return this.sessionService.getUserRole();
  }

}
