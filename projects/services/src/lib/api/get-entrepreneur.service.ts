import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrepreneur, HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({ providedIn: 'root' })


export class GetEntrepreneurService extends HttpServiceBase {

  // private get _serverUrl(): string {
  //   return `${this.config.ips.servicePath}counselor/`;
  // }



  getEntrepreneurList$(): Observable<Entrepreneur[]> {
    // return this.get$(new HttpRequestModel({
    //   url: this._serverUrl,
    //   action: 'getCounselor',
    // }));
    return this.http.get<Entrepreneur[]>('http://localhost:3030/entrepreneur/getEntrepreneur');

  }
}

//