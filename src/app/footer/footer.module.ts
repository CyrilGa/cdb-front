import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterFixComponent } from './footer-fix/footer-fix.component';
import { FooterRelativeComponent } from './footer-relative/footer-relative.component';

@NgModule({
  declarations: [FooterComponent, FooterFixComponent, FooterRelativeComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
