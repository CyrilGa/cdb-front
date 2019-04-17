import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerList } from './computer-list/computer-list.component';
import { Computer } from './computer/computer.component';
import { ComputerForm } from './computer-form/computer-form.component';

@NgModule({
  declarations: [
    ComputerList,
    Computer,
    ComputerForm
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComputerList,
    Computer,
    ComputerForm
  ]
})
export class ComputerModule { }
