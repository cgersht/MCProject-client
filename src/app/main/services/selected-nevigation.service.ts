import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedNevigationService {
  selected=''; 
  project ={};
  entrepures ={};
  counselor ={};
  constructor() { }
  
  updateSelected(selected){
    this.selected=selected;
  }


}
