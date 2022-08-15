import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { AllPipesModule } from 'pipes';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,  
    AllPipesModule
    
  ],
  exports:[ProjectComponent]
})
export class ProjectModule { }
