import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives.component';
import { CopyDirective } from './copy.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DirectivesComponent, CopyDirective],
  imports: [
    CommonModule
  ],
  exports: [DirectivesComponent,
             CopyDirective]
})
export class DirectivesModule { }
