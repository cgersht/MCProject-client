import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {
  @Input() option = {};
  @Input() selectingProject={} ;
  projName=''
  // selectingProject={}
  constructor() { }

  ngOnInit() {
    if(this.selectingProject){
    }
  }

  handleClick(selectedOption ) {
    console.log(selectedOption.name);
  }
  //******************************************* */
  // sendProjectName(projectName){
  //     this.projName=projectName.sendProjectName
  // }


  // goToMenu(project){
  //   console.log(project.projectName);
  //   this.selectingProject=project.projectName
  // }
}
