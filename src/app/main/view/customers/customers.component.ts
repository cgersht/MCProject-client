import { Component, OnInit } from '@angular/core';
import { Cunselor, Column } from 'types';
// import { GetCunselorService } from 'services';
import { Observable, NEVER } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  //server שמחזיר לי את רשימת היועצים מה Observable מערך של יועצים מסוג 
//   cunselors$: Observable<Cunselor[]> = NEVER;
//  columns: Column[]=[
//    {header:'מספר זהות', name:'counselorID'},
//    {header:'שם היועץ', name:'cunselorName'},
//    {header:'סוג היועץ', name:'counselorType'},
   
//    ]

  constructor() { }
  

  ngOnInit() {
//    this.cunselors$ = this.cunselorService.getCounselorList$(); 
   
    
  }

}
