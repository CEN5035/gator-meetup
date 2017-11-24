import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserService } from '../providers/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public user: UserService,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.user._token) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
