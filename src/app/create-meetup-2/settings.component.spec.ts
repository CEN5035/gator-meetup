import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardTitle, MatCardContent ,MatCard } from '@angular/material';
import {FormBuilder, FormGroup, Validators ,ReactiveFormsModule,FormsModule} from '@angular/forms';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [FormsModule,ReactiveFormsModule],
      declarations: [ SettingsComponent, MatCardTitle, MatCardContent ,MatCard],
      providers : []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
