import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Observable, NEVER } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService } from 'services';
import { Cunselor } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-counselor-type',
  templateUrl: './add-counselor-type.component.html',
  styleUrls: ['./add-counselor-type.component.scss']
})
export class AddCounselorTypeComponent implements OnInit {
  formGroup: FormGroup;
  // cunselors$: Observable<Cunselor[]> = NEVER;
  result
  constructor(
    private formBuilder: FormBuilder,
    private counselorService: GetCounselorService,
    private subscriptionService: SubscriptionService

  ) { }

  ngOnInit() {
    this.initForm()
  }
  // counselorType
  initForm() {
    this.formGroup = this.formBuilder.group({
      counselorType: ['', [Validators.required, Validators.pattern('[א-ת]*$')]]
    })
  }
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value = this.formGroup.value;
    this.counselorService.addCounselorType$(this.formGroup.value).pipe(
      tap(_ => this.counselorService.counselors$= this.counselorService.getCounselorList$('')),
    )
      .subscribe();
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
