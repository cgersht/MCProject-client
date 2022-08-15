import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule, MatOptionModule, MatSelectModule, MatTabsModule,
  MatTooltipModule} from '@angular/material';
import { CunselorsModule } from './cunselors/cunselors.module';
import { EntrepreneurModule } from './entrepreneur/entrepreneur.module';
import { ProjectsModule } from './projects/projects.module';
import { PaymentModule } from './payment/payment.module';
import { ProjectModule } from './project/project.module';
import { DateAndClockModule } from './date-and-clock/date-and-clock.module';
import { DirectivesModule } from 'directives';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    EntrepreneurModule,
    CunselorsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    ProjectsModule,
    PaymentModule,
    ProjectModule,
    MatFormFieldModule,
    DateAndClockModule,
    DirectivesModule
  ],
  exports: [ViewComponent]
})
export class ViewModule { }
