import { any } from 'codelyzer/util/function';
import { Component, OnInit } from '@angular/core';
import { AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CreateMeetUpService } from './create-meetup.service';

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
  postData: any = {};
  location = '';
  agenda = '';
  name = '';
  description = '';
  hideLocationNext = true;
  selectedLoc : any;
  

  constructor(private fb: FormBuilder, public meetUpObj: CreateMeetUpService) {
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

  onLocationSelection(selectedLoc: any) {
    console.log(selectedLoc);
    this.selectedLoc=selectedLoc;
    this.hideLocationNext=false;
  }

  onAgendaClick() {
    this.isTopicSet = true;
  }

  onNameClick() {
    this.isNameSet = true;
  }

  onSubmit() {
    this.submitted = true;
    this.postData.location=this.selectedLoc.vicinity;
    this.postData.agenda=this.agenda;
    this.postData.meetupName=this.name;
    this.postData.count=550;
    this.postData.pictureUrl='http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg';
    this.postData.description=this.description;
    this.postData.coordinates=[this.selectedLoc.geometry.location.lat,this.selectedLoc.geometry.location.lng];
    this.postData.meetupOwner="Venkat" //session userid should be passed.
    this.meetUpObj.createMeetUp(this.postData);

  }

}
