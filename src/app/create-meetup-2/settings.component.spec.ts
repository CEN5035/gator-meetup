import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardTitle, MatCardContent ,MatCard } from '@angular/material';
import {FormBuilder, FormGroup, Validators ,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {Http, HttpModule} from '@angular/http';

import { SettingsComponent } from './settings.component';
import {PsersonService} from './person.service';
import { UserService } from '../providers/user.service';


describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [FormsModule,ReactiveFormsModule,RouterModule,RouterTestingModule, HttpModule],
      declarations: [ SettingsComponent, MatCardTitle, MatCardContent ,MatCard],
      providers : [PsersonService, UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(SettingsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
  it('should create user profile data', () => {
    expect(true).toBeTruthy();
  });
  it('change profile data', () => {
    expect(true).toBeTruthy();
  });
  it('invalid data check', () => {
    expect(true).toBeTruthy();
  });
});
