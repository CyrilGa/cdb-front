import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRelativeComponent } from './header-relative/header-relative.component';
import { HeaderFixComponent } from './header-fix/header-fix.component';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderRelativeComponent, HeaderFixComponent, HeaderComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [HeaderComponent, HeaderFixComponent]
})
export class HeaderModule { }
