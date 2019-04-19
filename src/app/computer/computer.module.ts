import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
import { FooterModule } from '../footer/footer.module';
//import { ComputerFormComponent } from './computer-form/computer-form.component';
import { ServiceModule } from '../service/service.module';

@NgModule({
  declarations: [
    ComputerListComponent,
    ComputerDetailsComponent,
    //ServiceModule,
    //ComputerFormComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [
    ComputerListComponent,
    ComputerDetailsComponent,
    //ComputerFormComponent
  ]
})
export class ComputerModule { }
