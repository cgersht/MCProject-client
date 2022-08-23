import { componentFactoryName } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from 'types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit { 
  yazamImg={imgPath:environment.imgesPath,img:'/yazam.png'};               
  phoneImg={imgPath:environment.imgesPath,img:'/phone.png'};
  emailImg={imgPath:environment.imgesPath,img:'/email.png'}; 
  companyImg={imgPath:environment.imgesPath,img:'/company.png'}; 
  TypeImg={imgPath:environment.imgesPath,img:'/TypOfPermittion.png'};

  
  company=this.companyImg.imgPath+this.companyImg.img
  email=this.emailImg.imgPath+this.emailImg.img
  yazam=this.yazamImg.imgPath+this.yazamImg.img
  Type=this.TypeImg.imgPath+this.TypeImg.img
  @Output() selectSingleProject= new EventEmitter<Project>();
  @Output() send= new EventEmitter<any>();
  @Output() projects= new EventEmitter<any>();

  @Input() project = {};
  constructor() { }

  ngOnInit() {
    
  }
  ProjName='שם הפרויקט:  ';
  // selection(pro) {
  //   // console.log("hello i am in selection    ");   
  //   this.project = pro;
    
    // this.project.emit(pro)
  // }
  sender(se){
    this.send.emit(se);
  }

  clicked(pName){
    console.log("im in clicked");  
    console.log(pName);    
  }
  // projectsToProject(pro){
  //   this.projects.emit(pro)
  // }

}
