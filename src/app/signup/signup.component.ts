import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CommonService } from '../providers/common.service';
import { ApiService } from '../providers/api.service';
import { UserService } from '../providers/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userData = {
    name: '',
    email: '',
    password: '',
    location: '',
    hometown: '',
    language: '',
    birthday: '',
    gender: '',
    bio: '',
  };

  constructor(public common: CommonService,
    public user: UserService,
    private router: Router,
    private api: ApiService) { }

  ngOnInit() {
  }

  doSignup() {
    this.api.post('users/signup', this.userData)
      .subscribe(res => {
        console.log(res);
        alert('User has been created, you can login with your credentials');
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      });
  }

}
