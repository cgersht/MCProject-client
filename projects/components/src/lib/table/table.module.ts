import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import { DirectivesModule } from 'directives';
// import { PaymentModule } from 'src/app/main/view/payment/payment.module';
// import { PaymentComponent } from 'src/app/main/view/payment/payment.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    DirectivesModule,
    MatDialogModule,
    // PaymentModule
  ],
  // entryComponents:[PaymentComponent],
  exports:[TableComponent]
})
export class TableModule { }
