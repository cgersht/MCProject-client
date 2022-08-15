import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ClockAndDateComponent } from './clock-and-date/clock-and-date.component';



@NgModule({
  declarations: [ComponentsComponent, ClockAndDateComponent],
  imports: [
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
