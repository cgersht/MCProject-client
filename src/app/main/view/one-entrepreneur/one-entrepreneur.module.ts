import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneEntrepreneurComponent } from './one-entrepreneur.component';



@NgModule({
  declarations: [OneEntrepreneurComponent],
  imports: [
    CommonModule
  ],
  exports:[OneEntrepreneurComponent]
})
export class OneEntrepreneurModule { }
