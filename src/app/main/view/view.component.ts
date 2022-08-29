import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SelectedNevigationService } from '../services/selected-nevigation.service';
// import { CunselorsComponent } from './cunselors/cunselors.component';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  items: any = [];
  @Input() oneProjectfromProjects; 
  @Input() children;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() sendProjectName: EventEmitter<any> = new EventEmitter();
  @Output() projectsToProject: EventEmitter<any> = new EventEmitter();
   
  selectedOption = '';
  project = {};
  // children=this.selectedService.children
  constructor(
    public selectedService: SelectedNevigationService
    ) { }

  ngOnInit() {
     
  }
  
  selectedName(item) {
    console.log(item + "    item");
    this.selectedOption = item;    
  }

  initSelectedProject(project) {
    this.selectedService.updateSelected('oneProject');
   
    this.selectedService.project = project;
    console.log(project);
    console.log("im in initSelectedProject");
    this.sendProjectName.emit(this.project)
  }

}
