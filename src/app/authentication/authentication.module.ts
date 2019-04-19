import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class AuthenticationModule { }
