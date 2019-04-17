import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from './computer/computer.component';

@NgModule({
  declarations: [
    ComputerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComputerComponent
  ]
})
export class ComputerModule { }
