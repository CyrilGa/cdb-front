import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class AuthenticationModule { }
