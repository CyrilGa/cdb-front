import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRelativeComponent } from './header-relative/header-relative.component';
import { HeaderFixComponent } from './header-fix/header-fix.component';

@NgModule({
  declarations: [HeaderRelativeComponent, HeaderFixComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
