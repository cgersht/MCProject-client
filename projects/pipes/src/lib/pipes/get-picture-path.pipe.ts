import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'getPicturePath'
})
export class GetPicturePathPipe implements PipeTransform {
  transform()  {
    this.getPicrure()
  }

  getPicrure() {
    return environment.imgesPath;
  }

}
