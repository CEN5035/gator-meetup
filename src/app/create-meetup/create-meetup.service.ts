import { any } from 'codelyzer/util/function';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateMeetUpService {

  result:any;

  constructor(private _http: Http) { }

  createMeetUp(reqBody) {
    let headers = new Headers();
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
     return this._http.post("http://localhost:8000/postMeetup",reqBody,options).subscribe(res => {});
  }
}
