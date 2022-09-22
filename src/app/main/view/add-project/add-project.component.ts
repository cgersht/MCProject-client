import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllPipesModule } from 'pipes';
import { NEVER, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetEntrepreneurService, GetProjectService } from 'services';
import { Entrepreneur } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  formGroup: FormGroup;
  rova=['א','ב','ג','ד','ה','ו','ז','ח','ט','י','יא','יב','יג','יד','טו','טז','יז','סיטי']
  projectType=[
              {value: 1, viewValue: 'היתר בלבד'},
              {value: 2, viewValue: 'בקשה לתב"ע + היתר' },
              ];
  entrepreneur$:Observable<Entrepreneur[]>;
  entrepreneurs:Entrepreneur[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private entrepreneurService:GetEntrepreneurService,
    private projectService:GetProjectService,
    public hasErrors:AllPipesModule
  ) { }

  ngOnInit() {
    this.getEntrepreneurs();
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      ProjectName: ['', [Validators.required,Validators.minLength(2),]],
      ProjectCompany: ['', [Validators.required,]],
      ProjectAdress: ['', [Validators.required,]],
      ProjectType:['',[Validators.required,]],
      EntrepreneurId:['',[Validators.required,]],
      ProjectRova:['',[Validators.required,]],
    });
  }
  getEntrepreneurs(){
    
     this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$()
    .pipe(
      map(entrepreneurs=>this.entrepreneurs=entrepreneurs),
      tap(entrepreneurs => console.log('entrepreneurs:' , entrepreneurs)),
   )
  }
  
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value=this.formGroup.value;
    console.log('entrepreneurs',this.entrepreneurs);
    this.projectService.addProject$(this.formGroup.value).subscribe();
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
