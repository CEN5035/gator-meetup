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

  // searchMeetups(reqBody) {
  //   let headers = new Headers();
  //   let body=JSON.stringify(reqBody);
  //   headers.append('Content-Type','x-www-form-urlencoded');
  //   let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
  //    return this._http.post("http://localhost:8000/postMeetup",body,options).subscribe(res => {});
  // }

}
