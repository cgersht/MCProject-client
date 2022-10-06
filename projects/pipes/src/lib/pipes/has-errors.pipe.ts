import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({  name: 'hasErrors'})
export class HasErrorsPipe implements PipeTransform {

  transform(formGroup: FormGroup, controlName:string): any {
    return !!Object.keys(formGroup.controls[controlName].errors).length ;
  }

}
