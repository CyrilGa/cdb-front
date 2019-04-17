import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerComponent } from './computer/computer.component';
import {FooterModule} from '../footer/footer.module';
//import { ComputerFormComponent } from './computer-form/computer-form.component';
@NgModule({
  declarations: [
    ComputerListComponent,
    ComputerComponent,
    //ComputerFormComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [
    ComputerListComponent,
    ComputerComponent,
    //ComputerFormComponent
  ]
})
export class ComputerModule { }
