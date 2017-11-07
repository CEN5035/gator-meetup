import { any } from 'codelyzer/util/function';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateMeetUpService {

  result:any;

  constructor(private _http: Http) { }

  createMeetUp(reqBody) {
    let headers = new Headers();
    let body=JSON.stringify(reqBody);
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8000/postMeetup",body,options).subscribe(res => {});
  }

}