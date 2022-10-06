import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Menu } from 'types';
import { SelectedNevigationService } from '../services/selected-nevigation.service';
import { SubscriptionService } from '../services/subscription.service';
import { AddCounselorTypeComponent } from './add-counselor-type/add-counselor-type.component';
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
  menu: Menu
  component = ''
  project = {};
  constructor(
    public selectedService: SelectedNevigationService,
    private dialog: MatDialog,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit() { }
  selectedName(item) {
    console.log(item + "    item");
    this.selectedService.selectedCounselor = item;
  }
  openDialog() {
    switch (this.selectedService.selected) {
      case 'פרויקטים':
        this.subscriptionService.dialogRef = this.dialog.open(AddProjectComponent, {
          height: '625px',
          width: '550px',
          disableClose: true,
        })
        break;
      case 'יועצים':
        this.subscriptionService.dialogRef = this.dialog.open(AddCounselorTypeComponent, {
          height: '163px',
          width: '200px',
          disableClose: true,
        
        })
        break;
      case 'יזמים':
        this.subscriptionService.dialogRef = this.dialog.open(AddEntrepreneurComponent, {
          height: '630px',
          width: '550px',
          disableClose: true,
        })
        break;
      case 'CounselorsByType':
        this.subscriptionService.dialogRef = this.dialog.open(AddCounselorComponent, {
          height: '630px',
          width: '550px',
          disableClose: true,
        })
        break;

      default:
        break;
    } 
  }
}
