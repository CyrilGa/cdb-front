import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Computer} from '../model/computer.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent {

  isEdit = false;
  introducedDate: string;
  discontinuedDate: string;
  introducedHour: string;
  discontinuedHour: string;

  @Input()
  computer: Computer;

  @Output() deleteComputer = new EventEmitter();

  constructor(private translate: TranslateService) {
  }

  onEdit(computer: Computer): void {
    this.isEdit = !this.isEdit;
    this.introducedDate = computer.introduced.substring(0,10);
    this.discontinuedDate = computer.discontinued.substring(0,10);
    this.introducedHour = computer.introduced.substring(11);
    this.discontinuedHour = computer.discontinued.substring(11);
    console.log(this.introducedHour);
  }

  delete() {
    this.deleteComputer.emit(this.computer.id);
  }

}
