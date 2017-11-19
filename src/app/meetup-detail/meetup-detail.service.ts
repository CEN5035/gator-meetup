import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { any } from 'codelyzer/util/function';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MeetupDetailService {

  result: {};

  constructor(private _http: Http) { }

  getMeetupDetail(id): Observable<Object> {
    let headers = new Headers();
    headers.append('Content-Type', 'x-www-form-urlencoded');
    headers.append('_id', id);
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
     return this._http.get('http://localhost:8000/getMeetupDetail', options).map(result => this.result = result.json().data);
  }

}
