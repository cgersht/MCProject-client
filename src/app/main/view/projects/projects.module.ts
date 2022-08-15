import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { TableModule } from 'components';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports:[ProjectsComponent]
})
export class ProjectsModule { }
