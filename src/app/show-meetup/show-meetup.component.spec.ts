import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeetupComponent } from './show-meetup.component';

describe('ShowMeetupComponent', () => {
  let component: ShowMeetupComponent;
  let fixture: ComponentFixture<ShowMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
