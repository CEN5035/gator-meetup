import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { any } from 'codelyzer/util/function';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class GetMeetupsService {

  result: any;
  meetups: Object[];

  constructor(private _http: Http) { }

  getMeetups() {
    let headers = new Headers();
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
     return this._http.get("http://localhost:8000/getMeetups", options).map(result => this.result = result.json().data);
  }

  searchMeetups(searchTerm): Observable<Object> {
    let headers = new Headers();
    headers.append('Content-Type', 'x-www-form-urlencoded');
    headers.append('search', searchTerm);
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
     return this._http.get("http://localhost:8000/searchMeetups", options).map(result => this.result = result.json().data);
  }

}
