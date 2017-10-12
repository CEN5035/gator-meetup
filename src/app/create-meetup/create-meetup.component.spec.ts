import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetupComponent } from './create-meetup.component';

describe('CreateMeetupComponent', () => {
  let component: CreateMeetupComponent;
  let fixture: ComponentFixture<CreateMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
