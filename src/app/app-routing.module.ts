import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { ComputerListComponent } from './computer/computer-list/computer-list.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: ComputerListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
