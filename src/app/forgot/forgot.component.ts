import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  forgotPassword() {
    this.api.post('users/forgot', { email: this.email })
      .subscribe(res => {
        console.log(res);
        alert(res.message);
      }, err => {
        console.log(err);
        alert(JSON.parse(err._body).message);
      });
  }

}
