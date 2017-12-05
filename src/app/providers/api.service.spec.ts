import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

import {HttpModule} from '@angular/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiService],
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
