import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneCounselorComponent } from './one-counselor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OneCounselorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[OneCounselorComponent]
})
export class OneCounselorModule { }
