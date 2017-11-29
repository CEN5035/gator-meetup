import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Http, RequestOptions, Headers } from "@angular/http";

import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";

import { UserService } from '../providers/user.service';

@Injectable()
export class PsersonService {
    baseurl = "http://localhost:8000/";
    constructor(private http: Http, public userService: UserService) {
    }

    GetUser() {
        let headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.baseurl + "getUser/" + this.userService._details.userId, options).map(res => res.json());
    }
}