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
  projName:string='';
  @Input() selectChangingProject={} ;
  @Output() sendTo: EventEmitter<any>  = new EventEmitter ();

  constructor(
    private getOptionsService: GetOptionsService,
    public selectedService: SelectedNevigationService
    ) { }

  ngOnInit() {
    this.menuOption = this.getOptionsService.getOptions();
    console.log(this.menuOption,"menuOption");
    // if(this.selectedServi)
    
  }

  changeSelected(item) {
    this.selectedService.updateSelected(item.name);
  }
  clicked(){
    console.log("im in clicked");
    
  }
  onClick(){
    console.log(this.selectChangingProject,"selectChangingProject");
    this.sendTo.emit(this.selectChangingProject)    
  }

  

}
