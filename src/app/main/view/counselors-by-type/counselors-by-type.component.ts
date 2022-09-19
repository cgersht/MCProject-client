import { Component, OnInit } from '@angular/core';
import { Observable, NEVER } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService, GetEntrepreneurService } from 'services';
import { Cunselor, Entrepreneur } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';

@Component({
  selector: 'app-counselors-by-type',
  templateUrl: './counselors-by-type.component.html',
  styleUrls: ['./counselors-by-type.component.scss']
})
export class CounselorsByTypeComponent implements OnInit {
  counselors$: Observable<Cunselor[]> = NEVER;
  counselors:Cunselor[]=[]; 
  entrepreneur$: Observable<Entrepreneur[]>;
  entrepreneurs: Entrepreneur[] = [];
   constructor(
    public selectedService:SelectedNevigationService,
    private counselorService:GetCounselorService,
    private entrepreneurService:GetEntrepreneurService,

    ) { }

  ngOnInit() {  
  this.counselors$ = this.counselorService.getCounselorList$(this.selectedService.counselorType.TypeName)
  .pipe(
    map(result=>this.counselors=result),
    tap(result => console.log('counselors:' , result))    
        );
         
  }
  getCounselorOfficeDetails(counselor){
    // console.log(counselor,"counselor");    
    this.counselors.forEach(el => {
      if (el.CounselorOfficeName == counselor) {
        console.log(el,"selected");
        this.selectedService.counselor=el
        this.selectedService.updateSelected('OneCounselor')  ;      
      }
    })
  }
}
