import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output() sendMaterial: EventEmitter<any> = new EventEmitter();
  goToMenu:any;
  singleProject={}
  selected = '';
  children = [];
  // oneProjectfromProjects={};
  constructor() { }

  ngOnInit() {
  }
  onChange(item) {
    this.selected = item.name
    if (item.children) {
      this.children = item.children;
    } else {
      this.children = [];
    }
  }
  // oneProjectfromProjects(p){
    oneProjectfromProjects(){
    console.log("ppppppppppppppppppppppppppppppppp");
    // console.log(p);
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

    // this.sendToTheMenu(this.goToMenu)
  }
  sendToTheMenu(nameOfTheProject){
    this.goToMenu=nameOfTheProject;
    // this.oneProjectfromProjects-nameOfTheProject
    console.log(this.goToMenu);
    console.log("this.goToMenu");
    
  }


  sendToo(project){
    console.log("sendToTheMenu");  
    // console.log(this.oneProjectfromProjects,"P:><LOIKM");  
    this.sendToTheMenu(project)
  }
}
