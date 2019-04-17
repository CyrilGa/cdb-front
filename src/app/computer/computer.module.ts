import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
//import { ComputerFormComponent } from './computer-form/computer-form.component';
@NgModule({
  declarations: [
    ComputerListComponent,
    ComputerDetailsComponent,
    //ComputerFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComputerListComponent,
    ComputerDetailsComponent,
    //ComputerFormComponent
  ]
})
export class ComputerModule { }
