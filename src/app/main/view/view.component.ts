import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
// import { CunselorsComponent } from './cunselors/cunselors.component';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],

})
export class ViewComponent implements OnInit {
  items: any = [];
  @Input() oneProjectfromProjects;
  @Input() selected = '';
  @Input() children = [];
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() sendProjectName: EventEmitter<any> = new EventEmitter();
  @Output() projectsToProject: EventEmitter<any> = new EventEmitter();

  selectedOption = '';
  project = {};
  constructor() { }

  ngOnInit() {}
  
  selectedName(item) {
    console.log(item + "    item");
    this.selectedOption = item;
  }

  initSelectedProject(project) {
    this.selected = 'oneProject'
    this.project = project;
    console.log(project);
    console.log("im in initSelectedProject");
    this.sendProjectName.emit(this.project)
  }

}
