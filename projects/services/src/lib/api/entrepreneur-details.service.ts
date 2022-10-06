import { Injectable } from '@angular/core';
import { Entrepreneur } from 'types';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurDetailsService {
  entrepreneur={}
  // :Entrepreneur={
  //   EntrepreneurCompany: '',
  //   EntrepreneurName: '',
  //   EntrepreneurPhone: '',
  //   EntrepreneurMail: '',
  //   EntrepreneurSecretary: ''
  // }
  constructor() { }
}
