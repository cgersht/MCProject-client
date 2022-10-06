import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
projectSubsciption:boolean=false
close:any;
dialogRef:any;
flag=false;
value:{}
  constructor() { }
}
