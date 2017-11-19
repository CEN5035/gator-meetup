import { TestBed, inject } from '@angular/core/testing';

import { MeetupDetailService } from './meetup-detail.service';

describe('MeetupDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetupDetailService]
    });
  });

  it('should be created', inject([MeetupDetailService], (service: MeetupDetailService) => {
    expect(service).toBeTruthy();
  }));
});
