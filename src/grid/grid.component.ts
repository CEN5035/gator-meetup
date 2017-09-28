import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
})
export class GridComponent {
  meetups: Object[] = [
    { name: 'Docker Meetup', count: '600', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg'},
    { name: 'Hackers Meetup', count: '800', url: 'https://tctechcrunch2011.files.wordpress.com/2013/12/tc-meetups1.png'},
    { name: 'UFPT Sync Meet', count: '350', url : 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg' },
    { name: 'WiCISE Meetup', count: '368', url : 'http://poracaso.com/wp-content/uploads/2017/04/George-meetup.jpg' },
    { name: 'StartUps Club Meet', count: '584', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg' },
    { name: 'Badminton Weekly Meetup', count: '567', url: 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg' },
    { name: 'Docker Meetup', count: '600', url: 'https://tctechcrunch2011.files.wordpress.com/2013/12/tc-meetups1.png' },
    { name: 'Hackers Meetup', count: '800', url: 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg'},
    { name: 'UFPT Sync Meet', count: '350', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg' },
    { name: 'WiCISE Meetup', count: '368', url: 'https://tctechcrunch2011.files.wordpress.com/2013/12/tc-meetups1.png' },
    { name: 'StartUps Club Meet', count: '584', url: 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg' },
    { name: 'Badminton Weekly Meetup', count: '567', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg' },
  ];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  componentData = null;
 /* myMenu = {};
  this.myMenu = myMenu; */
  constructor(private _formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  onCreateMeetupClick() {
    console.log('hi');

  }
}
/* loadView(viewName) {

   this.componentData = {
     component: viewName,
     inputs: {
       showNum: 9
     }
   };
 }
}

const myMenu = [
    {
     id: 1,
    viewname: 'HelloWorldComponent'
    },
    {
     id: 2,
     viewname: 'WorldHelloComponent'

    },


];*/



/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
