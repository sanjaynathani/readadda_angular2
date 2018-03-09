import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Authentication } from '../security/authentication';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authentication: Authentication,
        private router: Router
      ) {}

      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("AuthGuard");
      if (!this.authentication.isLoggedIn) {
        // redirect the user
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
  }