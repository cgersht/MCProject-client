import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCounselorComponent } from './add-counselor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [AddCounselorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports:[AddCounselorComponent],
  entryComponents:[AddCounselorComponent]
})
export class AddCounselorModule { }
