import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupDetailComponent } from './meetup-detail.component';

describe('MeetupDetailComponent', () => {
  let component: MeetupDetailComponent;
  let fixture: ComponentFixture<MeetupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
