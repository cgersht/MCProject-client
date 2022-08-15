import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MenuModule } from './menu/menu.module';
import { ViewModule } from './view/view.module';
import { DirectivesModule } from 'directives';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MenuModule,
    ViewModule,
    DirectivesModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
