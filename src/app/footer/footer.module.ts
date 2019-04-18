import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterFixComponent } from './footer-fix/footer-fix.component';
import { FooterRelativeComponent } from './footer-relative/footer-relative.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [FooterFixComponent, FooterRelativeComponent],
  exports: [
    FooterFixComponent,
    FooterRelativeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule
  ]
})
export class FooterModule { }
