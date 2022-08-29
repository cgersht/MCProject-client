import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedNevigationService } from './services/selected-nevigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  @Output() sendMaterial: EventEmitter<any> = new EventEmitter();
  
  children = [];
  
  constructor(private selectedService: SelectedNevigationService) { }

  ngOnInit() {
  }
  onChange(item) {
console.log(item,"item");
    if (item.children) {
      this.children = item.children;
    } else {
      this.children = [];
    }
  }
   
}
