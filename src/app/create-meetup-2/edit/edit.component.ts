import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public Name: string = '';
  public Value: string = '';
  public OriginalValue: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute,
    public userService: UserService,
    private _http: Http) { }
  update() {
    console.log(this.Value);
    let headers = new Headers();
    let data = {
      originalValue: this.OriginalValue,
      value: this.Value,
      valueType: this.Name,
      userId: this.userService._details.userId
    }
    let body = JSON.stringify(data);

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8000/updateData", body, options).subscribe(res => {
      console.log(res);
      alert("Updated")
      this.Navigatebook();
    }, err => {
      console.log(err);
      alert('Error !');
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Name = params['display'];
      this.Value = params['value'];
      this.OriginalValue = params['value'];

    });
  }
  Navigatebook() {
    this.router.navigate(['/settings']);
  }
  // private name:string='';
  //   private originalName:string='';
  // private displayname:string='';
  // public showcontrol = true;
  //   constructor(private route: ActivatedRoute, private _http: Http) { }

  //   ngOnInit() {
  //      this.route.params.subscribe(params => {
  //        this.originalName = params['name'];
  //        this.name = params['name'];
  //       this.displayname= params['display'];

  //       if(this.displayname=='date')
  //       {
  //         this.showcontrol = false;
  //       }
  //       console.log(params['name']) // (+) converts string 'id' to a number

  //       // In a real app: dispatch action to load the details here.
  //    });
  //   }

  //   updateData() {
  //     let headers = new Headers();
  //     let data = {
  //       originalValue: this.originalName,
  //       value: this.name,
  //       valueType: this.displayname
  //     }
  //     let body=JSON.stringify(data);
  //     headers.append('Content-Type','application/json');
  //     headers.append('Access-Control-Allow-Origin', '*');
  //     headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  //     headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  //     let options = new RequestOptions({ headers: headers });
  //     return this._http.post("http://localhost:8000/updateData",body,options).subscribe(res => {
  //       console.log(res);
  //     });
  //   }

}
