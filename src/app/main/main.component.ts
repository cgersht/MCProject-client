import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SelectedNevigationService } from './services/selected-nevigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chetzImg = { imgPath: environment.imgesPath, img: '/chetz.png' };
  chetz = this.chetzImg.imgPath + this.chetzImg.img;

  children = [];

  constructor(private selectedService: SelectedNevigationService) { }

  ngOnInit() {
  }
  onClickOnArrow(direction) {
    console.log(direction, "direction");
  }
  onChange(item) {
    console.log(item, "item");
    if (item.children) {
      this.children = item.children;
    } else {
      this.children = [];
    }
  }

}
