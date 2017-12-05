import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotComponent } from './forgot.component';
import { FormsModule } from '@angular/forms';
import {ApiService} from '../providers/api.service';
import {HttpModule} from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let fixture: ComponentFixture<ForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, HttpModule,RouterTestingModule,RouterModule],
      declarations: [ ForgotComponent ],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
