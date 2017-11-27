import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email = '';
  formSubmit = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  forgotPassword() {
    this.api.post('users/forgot', { email: this.email })
      .subscribe(res => {
        console.log(res);
        alert(res.message);
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        alert(JSON.parse(err._body).message);
      });
  }

}
