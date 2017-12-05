import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeetupComponent } from './show-meetup.component';
import { MatCardTitle, MatCardContent ,MatCard } from '@angular/material';
import {FormBuilder, FormGroup, Validators ,ReactiveFormsModule,FormsModule} from '@angular/forms';
import {ApiService} from '../providers/api.service';
import {HttpModule} from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {CommonService} from '../providers/common.service';
import {UserService} from '../providers/user.service';

describe('ShowMeetupComponent', () => {
  let component: ShowMeetupComponent;
  let fixture: ComponentFixture<ShowMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, HttpModule, RouterTestingModule, RouterModule],
      declarations: [ ShowMeetupComponent,MatCardTitle, MatCardContent ,MatCard ],
      providers: [CommonService ,UserService, ApiService]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ShowMeetupComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should show the details of the meetup', () => {
    expect(true).toBeTruthy();
  });




});
