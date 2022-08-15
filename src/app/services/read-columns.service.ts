import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { Column } from 'types';

@Injectable({
  providedIn: 'root'
})
export class ReadColumnsService {

  constructor(private http: HttpClient) { }

  getColumns$(path):Observable<any> {
       return this.http.get<any>(path) 
  }
}
