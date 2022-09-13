import { Component, OnInit } from '@angular/core';
import { EntrepreneurDetailsService, GetEntrepreneurService } from 'services';
import { NEVER, Observable } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Entrepreneur, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';


@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  entrepreneur$:Observable<Entrepreneur[]>=NEVER;
  entrepreneurs:Entrepreneur[]=[];
  columns$: Observable<Column[]> = NEVER;
  constructor(
    private entrepreneurService:GetEntrepreneurService,
    private readColumns: ReadColumnsService,
    private entrepreneurDetails:EntrepreneurDetailsService,
    private selectedService:SelectedNevigationService
    ) { } 
  ngOnInit() {      
     this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$().pipe(
        map(entrepreneurs=>this.entrepreneurs=entrepreneurs),
        tap(entrepreneurs => console.log('entrepreneurs:' , entrepreneurs)),
     );
     this.columns$ = this.readColumns.getColumns$(environment.enrepreneursTableColumns)
    }
    getEntrepreneurDetalis(entrepreneur){
      console.log(entrepreneur,"entrepreneur in getEntrepreneurDetalis before");
      
     this.entrepreneurs.forEach(el => {
      console.log({el});      
        if(el=entrepreneur)
         {
            this.entrepreneurDetails.entrepreneur=el
            this.selectedService.updateSelected('oneEntrepreneur')
            // console.log(this.entrepreneurDetails.entrepreneur,"entrepreneur in getEntrepreneurDetalis after");
        //  break;
         } 
        
      });
    }
}




// this.entrepreneurs.forEach(el=>{
//   console.log(el);    
//   if(el.EntrepreneurName==entrepreneur){
//     this.oneEntrepreneur=el;
//   }
// })