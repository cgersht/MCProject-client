import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetEntrepreneurService } from 'services';
import { Entrepreneur } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-entrepreneur',
  templateUrl: './add-entrepreneur.component.html',
  styleUrls: ['./add-entrepreneur.component.scss']
})
export class AddEntrepreneurComponent implements OnInit {
  formGroup: FormGroup;
  entrepreneur$:Observable<Entrepreneur[]>;
  entrepreneurs:Entrepreneur[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private entrepreneurService:GetEntrepreneurService,
  ) { }

  ngOnInit() {
    // this.getEntrepreneurs();
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      EntrepreneurName: ['', Validators.required],
      EntrepreneurCompany: ['', [Validators.required]],
      EntrepreneurPhone: ['', Validators.required],
      EntrepreneurMail:['',Validators.required],
      OfficeAdress:['',Validators.required],
      EntrepreneurSecretary:['',Validators.required],
      EntrepreneurSecretaryPhone:['',Validators.required],
      EntrepreneurSecretaryMail:['',Validators.required ],
      EntrepreneurCompanyAddress:['',Validators.required ],
      EntrepreneurCompanyAddressToSend:['',Validators.required ],
      EntrepreneurCompanyPhone:['',[Validators.required,this.phoneValidator]],
      EntrepreneurCompanyMail:['',[Validators.required,this.emailValidator],[0-9] ],
      EntrepreneurCompanyFax:['',Validators.required ],
 });  
  }
  // getEntrepreneurs(){
  //    this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$()
  //   .pipe(
  //     map(entrepreneurs=>this.entrepreneurs=entrepreneurs),
  //     tap(entrepreneurs => console.log('entrepreneurs:' , entrepreneurs)),
  //  )
  // }
  phoneValidator(control){
    console.log(control);    
    if(control.value.length){
      if(control.value.length>7&&control.value.length<13){
        if(control.value.match(/^[0-9]+(\.?[0-9]+)?$/))
        return null;
      } 
      else {
        return { invalidPhone: true };
    }
  }
}
  emailValidator(control) {
    if (
      control.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value=this.formGroup.value;
    this.entrepreneurService.addEntrepreneur$(this.formGroup.value).subscribe();
   this.reset()
  }
  reset() {
    this.subscriptionService.close = true;
    console.log(this.subscriptionService.close, "before close");
    if (this.subscriptionService.close) {
      this.subscriptionService.close = false;
      this.subscriptionService.dialogRef.close();
      console.log(this.subscriptionService.close, "after close");
      console.log("i am closed");
    }
  }
}
