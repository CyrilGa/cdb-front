import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Computer} from '../model/computer.model';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent {

  @Input()
  computer: Computer;

  @Output() deleteComputer = new EventEmitter();

  delete() {
    this.deleteComputer.emit(this.computer.id);
  }

}
