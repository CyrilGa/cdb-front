import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRelativeComponent } from './header-relative/header-relative.component';
import { HeaderFixComponent } from './header-fix/header-fix.component';
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ServiceModule } from '../service/service.module';

@NgModule({
  declarations: [HeaderRelativeComponent, HeaderFixComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ServiceModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
