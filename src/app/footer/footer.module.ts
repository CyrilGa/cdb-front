import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterFixComponent } from './footer-fix/footer-fix.component';
import { FooterRelativeComponent } from './footer-relative/footer-relative.component';

@NgModule({
  declarations: [FooterFixComponent, FooterRelativeComponent],
  exports: [
    FooterFixComponent, FooterRelativeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }