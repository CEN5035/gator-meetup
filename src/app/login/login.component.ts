import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { CommonService } from '../providers/common.service';
import { ApiService } from '../providers/api.service';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {
    email: '',
    password: '',
  };

  formSubmit = false;
  constructor(public common: CommonService,
    public user: UserService,
    private router: Router,
    private api: ApiService) { }

  ngOnInit() {
  }

  doLogin() {
    this.api.post('users/login', this.userData)
      .subscribe(res => {
        console.log(res);
        this.user._details = res['data'];
        this.user._token = res['token'];
        localStorage.setItem('TOKEN', res['token']);
        localStorage.setItem('USER_DETAILS', JSON.stringify(res['data']));
        this.router.navigate(['/home']);
        // alert(res.message);
      }, err => {
        console.log(err);
        alert(JSON.parse(err._body).message);
      });
  }
}
