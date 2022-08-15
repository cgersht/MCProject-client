import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cunselor, HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({ providedIn: 'root' })


export class GetCounselorService extends HttpServiceBase {

  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}counselor/`;
  }



  getCounselorList$(counselorType:string): Observable<Cunselor[]> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCounselor',
      params:{counselorType}
    }));
   // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');

  }
}
