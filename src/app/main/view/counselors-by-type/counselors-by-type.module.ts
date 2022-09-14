import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounselorsByTypeComponent } from './counselors-by-type.component';



@NgModule({
  declarations: [CounselorsByTypeComponent],
  imports: [
    CommonModule
  ],
  exports:[CounselorsByTypeComponent]
})
export class CounselorsByTypeModule { }
