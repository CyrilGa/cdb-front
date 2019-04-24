import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
import { FooterModule } from '../footer/footer.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { MatGridListModule } from '@angular/material';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    ComputerListComponent,
    ComputerDetailsComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    CustomMaterialModule,
    MatGridListModule,
    HeaderModule
  ],
  exports: [
    ComputerListComponent,
    ComputerDetailsComponent
  ]
})
export class ComputerModule { }
