import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEntrepreneurComponent } from './add-entrepreneur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [AddEntrepreneurComponent],
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
  exports:[AddEntrepreneurComponent],
  entryComponents:[AddEntrepreneurComponent]
})
export class AddEntrepreneurModule { }
