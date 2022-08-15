import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockAndDateComponent } from './clock-and-date.component';



@NgModule({
  declarations: [ClockAndDateComponent],
  imports: [
    CommonModule
  ],
  exports:[ClockAndDateComponent]
})
export class ClockAndDateModule { }
