import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Menu } from 'projects/types/src/public-api';
import { SelectedNevigationService } from '../services/selected-nevigation.service';
import { SubscriptionService } from '../services/subscription.service';
import { AddCounselorComponent } from './add-counselor/add-counselor.component';
import { AddEntrepreneurComponent } from './add-entrepreneur/add-entrepreneur.component';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  items: any = [];
  menu:Menu
  componnent=''
  // selectedOption = '';
  project = {};
  constructor(
    public selectedService: SelectedNevigationService,
    private dialog: MatDialog,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit() {}
  selectedName(item) {
    console.log(item + "    item");
    this.selectedService.selectedCounselor = item;
  }
  openDialog() {
    switch (this.selectedService.selected) {
       case 'פרויקטים':
           this.subscriptionService.dialogRef = this.dialog.open(AddProjectComponent)
               break;
      case 'יועצים':
           this.subscriptionService.dialogRef = this.dialog.open(AddCounselorComponent)
               break;
      case 'יזמים':
          this.subscriptionService.dialogRef = this.dialog.open(AddEntrepreneurComponent, {
            height: '700px',
            width: '550px',
            disableClose: true ,
          })
               break; 
      default:
               break;
} 
  }
}
