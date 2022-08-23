import { Component, OnInit } from '@angular/core';
import { GetEntrepreneurService } from 'services';
import { NEVER, Observable } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Entrepreneur, Column } from 'types';


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
    private readColumns: ReadColumnsService
    ) { }
   
    
    ngOnInit() {
      
     this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$().pipe(
        map(entrepreneurs=>this.entrepreneurs=entrepreneurs),
        tap(entrepreneurs => console.log('entrepreneurs:' , entrepreneurs)),
     );
     this.columns$ = this.readColumns.getColumns$(environment.enrepreneursTableColumns)
     console.log("yes");

    }

}
