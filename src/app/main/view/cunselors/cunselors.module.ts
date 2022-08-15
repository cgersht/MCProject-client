import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CunselorsComponent } from './cunselors.component';
import { TableModule } from 'components';



@NgModule({
  declarations: [CunselorsComponent],
  imports: [
    CommonModule,
    TableModule

  ],
  exports:[CunselorsComponent]
})
export class CunselorsModule { }
