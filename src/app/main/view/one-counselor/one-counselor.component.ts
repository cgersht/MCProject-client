import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService, GetEntrepreneurService } from 'services';
import { Cunselor, Entrepreneur } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
// import "https://www.googleapis.com/auth/script.send_mail"


@Component({
  selector: 'app-one-counselor',
  templateUrl: './one-counselor.component.html',
  styleUrls: ['./one-counselor.component.scss']
})
export class OneCounselorComponent implements OnInit {
  counselors$: Observable<Cunselor[]> = NEVER;
  counselors:Cunselor[]=[]; 
  entrepreneur$: Observable<Entrepreneur[]>;
  entrepreneurs: Entrepreneur[] = [];
   constructor(
    public selectedService:SelectedNevigationService,
    private counselorService:GetCounselorService,
    private entrepreneurService:GetEntrepreneurService,
    private http:HttpClient,
    ) { }

  ngOnInit() {        
   
    this.getEntrepreneurs();  
  this.counselors$ = this.counselorService.getCounselorList$(this.selectedService.counselorType.TypeName)
  .pipe(
    map(result=>this.counselors=result),
    tap(result => console.log('counselors:' , result))    
        );
  }
  getEntrepreneurs() {
    this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$()
      .pipe(
        map(entrepreneurs => this.entrepreneurs = entrepreneurs),
        tap(entrepreneurs => console.log('entrepreneurs:', entrepreneurs)),
      )
  }
// clicking(){
//   const email = this.selectedService.counselor;
//       const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//       this.http.post('https://formspree.io/asdlf7asdf',
//         { name: email.CounselorOfficeMainSecretary, replyto: email.CounselorOfficeMainSecretaryMail, message:'' },
//         { 'headers': headers }).subscribe(
//             response => {
//             console.log(response);
//           }
//         );
// }

  getCounselorOfficeDetails(counselor){
    this.counselors.forEach(el => {
      if (el.CounselorOfficeName == counselor) {
        console.log(el,"selected");
        this.selectedService.counselor=el
      }
    })
  
  }
}
