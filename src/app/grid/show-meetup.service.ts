import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { any } from 'codelyzer/util/function';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class GetMeetupDetailsService {

  result: any;
  meetups: Object[];

  constructor(private _http: Http) { }

  getMeetupDetails() {
    let headers = new Headers();
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    const meetupId = localStorage.getItem("meetup");
    console.log("meetupId in service " + meetupId );
     return this._http.get("http://localhost:8000/getMeetupDetails?id="+meetupId, options).map(result => this.result = result.json().data);
  }
}
