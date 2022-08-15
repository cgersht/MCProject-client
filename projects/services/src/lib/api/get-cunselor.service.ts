import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestModel, Cunselor } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({  providedIn: 'root'})
export class GetCunselorService extends HttpServiceBase {
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}counselor/`;
  }

  getCounselorList$(): Observable<Cunselor[]> {
   return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCounselor',
    }));
  // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');

  }

}
