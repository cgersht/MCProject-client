import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GetCounselorService  } from 'services';
import { NEVER, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'; 
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Cunselor, Column } from 'types';

@Component({
  selector: 'app-cunselors',
  templateUrl: './cunselors.component.html',
  styleUrls: ['./cunselors.component.scss']
})
export class CunselorsComponent implements OnInit, OnChanges {
  @Input() selectedCunselor = '';
  //server שמחזיר לי את רשימת היועצים מה Observable מערך של יועצים מסוג 
  cunselors$: Observable<Cunselor[]> = NEVER;
  cunselors:Cunselor[]=[];
  columns$: Observable<Column[]> = NEVER;
  
  constructor(
    private counselorService:GetCounselorService,
    private readColumns: ReadColumnsService
  ) { }
  
  ngOnChanges({selectedCunselor}: SimpleChanges): void {
    if(selectedCunselor){
      const {currentValue} = selectedCunselor;
      this.cunselors$ = this.counselorService.getCounselorList$(currentValue) ; 
    }
  }
 
  
  ngOnInit() {
   this.cunselors$ = this.counselorService.getCounselorList$('') ; 
   this.columns$ = this.readColumns.getColumns$(environment.counselorsTableColumns)
   
  }
  selectedName(selected){
    // this.cunselors$.forEach(c=>{
      //   console.log(c.counselorName+"   list of cunselors"); 
      //  })
    // console.log(this.cunselors$+"   this.cunselors$ ");
    console.log(selected+ "    selected name");
    // this.cunselors$.map(...this.cunselors$,rest)

  }


}
