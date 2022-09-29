import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
  textValidators(control){
    console.log(control);
    if(control.value.length){
      if(control.value.length>7&&control.value.length<13){
        if(control.value.match(/^[0-9]+(\.?[0-9]+)?$/))
        return null;
      } 
      else {
        return { invalidPhone: true };
    }
  }
  }
  phoneValidator(control){
  console.log(control);    
    if(control.value.length){
      if(control.value.length>7&&control.value.length<13){
        if(control.value.match(/^[א-ת]+(\.?[א-ת]+)?$/))
        return null;
      } 
      else {
        return { invalidPhone: true };
    }
  }
}
  emailValidator(control) {
    if (
      control.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }


}
