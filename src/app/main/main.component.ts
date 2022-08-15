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

  sendToTheMenu(nameOfTheProject){
    this.goToMenu=nameOfTheProject;
    console.log(this.goToMenu);
    console.log("this.goToMenu");
    
  }
}
