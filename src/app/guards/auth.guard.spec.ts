import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

import {UserService} from '../providers/user.service'
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[RouterModule, RouterTestingModule],
      providers: [AuthGuard, UserService],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
