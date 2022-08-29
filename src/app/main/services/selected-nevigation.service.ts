import { Injectable } from '@angular/core';
import { Cunselor, Entrepreneur, Project } from 'types';

@Injectable({
  providedIn: 'root'
})
export class SelectedNevigationService {
  selected=''; 
  project:Project;
  entrepreneur:Entrepreneur;
  counselor:Cunselor;
  children:[]
  constructor() { }

  updateSelected(selected){
    this.selected=selected;
  }
}
