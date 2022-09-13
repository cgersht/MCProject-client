import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetImgPathPipe } from './get-img-path.pipe';
import { HasErrorsPipe } from './has-errors.pipe';
import { GetErrorPipe } from './get-error.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GetImgPathPipe, HasErrorsPipe, GetErrorPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GetImgPathPipe,
    HasErrorsPipe,
    GetErrorPipe,
]

})
export class AllPipesModule { }
