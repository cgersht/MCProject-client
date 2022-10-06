import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,  MatFormFieldModule, MatIconModule,
   MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { PipesModule } from 'pipes';



@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    PipesModule,
    ],
  exports:[AddProjectComponent],
  entryComponents:[AddProjectComponent]
})
export class AddProjectModule { }
