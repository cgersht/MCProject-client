import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {
  @Input() option = {};
  projName=''
  children
  constructor() { }

  ngOnInit() {
   this.onChange(this.option)
  }
  onChange(item) {
    console.log(item,"item");
        if (item.children) {
          this.children = item.children;
        } else {
          this.children = [];
        }
      }
  handleClick(selectedOption ) {
    console.log(selectedOption.name);
  }

}
