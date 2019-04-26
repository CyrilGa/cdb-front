import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
import { FooterModule } from '../footer/footer.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { MatGridListModule } from '@angular/material';
import { HeaderModule } from '../header/header.module';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputerFormComponent } from './computer-form/computer-form.component';

=======
import { TranslateModule } from '@ngx-translate/core';
>>>>>>> 1e017099e887ea393a2090e7f175fd33b69fa265

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
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    TranslateModule
>>>>>>> 1e017099e887ea393a2090e7f175fd33b69fa265
  ],
  exports: [
    ComputerListComponent,
    ComputerDetailsComponent,
    ComputerFormComponent
  ]
})
export class ComputerModule { }
