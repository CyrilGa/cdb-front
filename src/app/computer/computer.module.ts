import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
import { FooterModule } from '../footer/footer.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { MatGridListModule } from '@angular/material';
import { HeaderModule } from '../header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputerFormComponent } from './computer-form/computer-form.component';


@NgModule({
  declarations: [
    ComputerListComponent,
    ComputerDetailsComponent,
    ComputerFormComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    CustomMaterialModule,
    MatGridListModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ComputerListComponent,
    ComputerDetailsComponent,
    ComputerFormComponent
  ]
})
export class ComputerModule { }
