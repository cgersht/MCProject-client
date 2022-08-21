import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'; 
import { GetOptionsService } from 'services';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOption: string[];
  projName:string='';
  @Input() selectChangingProject={} ;
  @Output() change: EventEmitter<any>  = new EventEmitter ();
  @Output() sendTo: EventEmitter<any>  = new EventEmitter ();
  constructor(private getOptionsService: GetOptionsService) { }

  ngOnInit() {
    this.menuOption = this.getOptionsService.getOptions();
  }

  changeSelected(item) {
     this.change.emit(item);
  }
  clicked(){
    console.log("im in clicked");
    
  }
  onClick(){
    console.log(this.selectChangingProject,"selectChangingProject");
    this.sendTo.emit(this.selectChangingProject)    
  }

  //***************************************************************/
  // selectingProject(project){
  //   console.log("sendToMenu");    
  //   this.selectChangingProject=project;
  // }
  //***************************************************************/
  // goToMenu(project){
  //   console.log(project.projectName);
  //   this.selectingProject=project.projectName
  // }

  // **********************************************
  // sendMaterial(project){
  //   this.projectName=project.projectName
  //   console.log(this.projectName);

    
  // }

}
