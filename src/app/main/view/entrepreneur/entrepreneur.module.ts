import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepreneurComponent } from './entrepreneur.component';
import { TableModule } from 'components';



@NgModule({
  declarations: [EntrepreneurComponent],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports:[EntrepreneurComponent]
})
export class EntrepreneurModule { }
