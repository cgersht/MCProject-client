import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService } from 'services';
import { Entrepreneur } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-counselor',
  templateUrl: './add-counselor.component.html',
  styleUrls: ['./add-counselor.component.scss']
})
export class AddCounselorComponent implements OnInit {

  formGroup: FormGroup;
  counselorType=[
              {value: 1, viewValue: 'נגישות'},
              {value: 2, viewValue: 'אינסטלציה'},
              {value: 3, viewValue: 'מיזוג אויר'},
              {value: 4, viewValue: 'חשמל'},
              {value: 5, viewValue: 'פיתוח'},
              {value: 6, viewValue: 'קונסטרוקציה'},
              {value: 7, viewValue: 'תנועה'},
              {value: 8, viewValue: 'בטיחות'}
            ];

  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private counselorService:GetCounselorService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      CounselorOfficeName: ['', Validators.required],
      CounselorOfficeAdress: ['', [Validators.required]],
      CounselorOfficePhone: ['', Validators.required],
      CounselorOfficeType:['',Validators.required],
      CounselorOfficeManager:['',Validators.required],
      CounselorOfficeManagerPhone:['',Validators.required],
      CounselorOfficeManagerMail:['',Validators.required],
      CounselorOfficeMainSecretary:['',Validators.required],
      CounselorOfficeMainSecretaryPhone:['',Validators.required],
      CounselorOfficeMainSecretaryMail:['',Validators.required],

    });
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
    this.counselorService.addCounselor$(this.formGroup.value).subscribe();
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