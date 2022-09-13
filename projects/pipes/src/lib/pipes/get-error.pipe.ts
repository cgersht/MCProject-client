import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({  name: 'getError'})
export class GetErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors):  string[] {
    if(!errors){
      return [];
    }
    let errorsToDisplay = [];
    Object.keys(errors).forEach(error => {
      switch(error){
        case'required': errorsToDisplay= [...errorsToDisplay, 'שדה חובה']
             break;
        case'invalidEmailAddress': errorsToDisplay= [...errorsToDisplay, 'כתובת אמייל לא נכונה']
             break;
        case'maxlength': errorsToDisplay= [...errorsToDisplay, 'מספר תווים לא תקין']
             break;
      }
    }); 
    return errorsToDisplay ;
  }


}
