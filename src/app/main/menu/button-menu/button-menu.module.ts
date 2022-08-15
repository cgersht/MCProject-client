import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMenuComponent } from './button-menu.component';
import { AllPipesModule } from 'pipes';
import { MatButtonModule } from '@angular/material';
 


@NgModule({
  declarations: [ButtonMenuComponent],
  imports: [
    CommonModule,
    AllPipesModule,
    MatButtonModule   
  ],
  exports: [ButtonMenuComponent]
})
export class ButtonMenuModule { }
