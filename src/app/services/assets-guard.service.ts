import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssetsGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
}
