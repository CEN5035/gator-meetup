import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MeetupDetailService } from './meetup-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { share } from 'rxjs/operator/share';
import { Subscription } from 'rxjs/Subscription';
import { delay } from 'rxjs/operator/delay';


@Component({
  selector: 'app-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetupDetailComponent implements OnInit {

  meetup: {};
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute, public meetupDetailService: MeetupDetailService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.meetupDetailService.getMeetupDetail(id).subscribe(data => {this.meetup = data[0]; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
