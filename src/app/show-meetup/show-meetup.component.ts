import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-show-meetup',
  templateUrl: './show-meetup.component.html',
  styleUrls: ['./show-meetup.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShowMeetupComponent implements OnInit {
  meetup$: Observable<Object>;
  meetup: {};
  subscription: Subscription;

  locationForm: FormGroup;
  agendaForm: FormGroup;
  topicForm: FormGroup;
  imageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //this.meetup$ = getMeetupService.getMeetupDetails();
    //console.log('%o', this.meetup$);
    this.locationForm = fb.group({
      'location': [null, Validators.required],
    });
    this.agendaForm = fb.group({
      'agenda': [null, Validators.required],
    });
    this.topicForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(60)])],
    });

    this.imageForm = fb.group({
    });
  }

  ngOnInit() {
    //this.subscription = this.getMeetupService.getMeetupDetails().subscribe(data => {this.meetup = data; });
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

}
