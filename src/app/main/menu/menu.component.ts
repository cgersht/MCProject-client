import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'; 
import { GetOptionsService } from 'services';
import { SelectedNevigationService } from '../services/selected-nevigation.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOption: string[];

  constructor(
    private getOptionsService: GetOptionsService,
    public selectedService: SelectedNevigationService
    ) { }

  ngOnInit() {   
    this.menuOption = this.getOptionsService.getOptions();
    console.log(this.menuOption,"menuOption");    
 }

  changeSelected(item) {
    this.selectedService.updateSelected(item.name);
    this.selectedService.children=item.children;
  }
  clicked(){
    console.log("im in clicked");   
  }
  
}
