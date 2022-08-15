import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() sendToMenu:any=null;

  constructor() { }

  ngOnInit(): void {

  }

  // sendToTheMenu(p){
  //   console.log("p");    
  //   this.sendToMenu=p
  // }

}
