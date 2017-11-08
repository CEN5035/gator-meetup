import { TestBed, inject } from '@angular/core/testing';

import { GetMeetupsService } from './get-meetups.service';

describe('GetMeetupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMeetupsService]
    });
  });

  it('should be created', inject([GetMeetupsService], (service: GetMeetupsService) => {
    expect(service).toBeTruthy();
  }));
});
