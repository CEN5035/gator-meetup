import { Component, OnInit } from '@angular/core';
import { AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.css']
})

export class CreateMeetupComponent {
  submitted= false;
  isLocationSet= false;
  isTopicSet= false;
  isNameSet= false;
  locationForm: FormGroup;
  agendaForm: FormGroup;
  topicForm: FormGroup;
  post: any;
  location = '';
  agenda = '';
  name = '';
  description = '';


  constructor(private fb: FormBuilder) {
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
  }

  onLocationClick() {
    this.isLocationSet = true;
  }

  onAgendaClick() {
    this.isTopicSet = true;
  }

  onNameClick() {
    this.isNameSet = true;
  }

  onSubmit() {
    this.submitted = true;
  }

  // ngOnInit() {

  //   this.rForm.get('validate').valueChanges.subscribe(
  //     (validate) => {
  //       if (validate === '1') {
  //         this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
  //         this.titleAlert = 'You need to specify at least 3 characters';
  //       } else {
  //         this.rForm.get('name').setValidators(Validators.required);
  //       }
  //       this.rForm.get('name').updateValueAndValidity();
  //     }
  //   );
  // }

  // addPost(post) {
  //   this.description = post.description;
  //   this.name = post.name;
  // }
}
