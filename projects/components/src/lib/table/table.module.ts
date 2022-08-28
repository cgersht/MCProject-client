import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatPaginatorModule } from '@angular/material';
import { DirectivesModule } from 'directives';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    DirectivesModule
  ],
  //entryComponents:[NewProject],
  exports:[TableComponent]
})
export class TableModule { }
