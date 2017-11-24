import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './providers/common.service';
import { ApiService } from './providers/api.service';
import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gator Meetup';

  constructor(public common: CommonService,
    public user: UserService,
    private router: Router,
    private api: ApiService) {
    if (this.user._token) {
      this.loginCheck();
    }
  }

  loginCheck() {
    console.log('tes');
    this.api.post('users/islogin', { token: this.user._token })
      .subscribe(res => {
        console.log(res);
        this.user._details = res['data'];
      }, err => {
        console.log(err);
        this.logout();
      });
  }

  logout() {
    this.user._details = null;
    this.user._token = '';
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
