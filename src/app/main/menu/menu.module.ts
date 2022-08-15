import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { LogoModule } from './logo/logo.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonMenuModule } from './button-menu/button-menu.module';
import {  MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    LogoModule,
    ButtonMenuModule,
   HttpClientModule,
   MatButtonModule,
   FormsModule,
  ],
  exports : [ MenuComponent ]
})
export class MenuModule { }
