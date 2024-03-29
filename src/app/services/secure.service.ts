import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecureService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!(isDevMode())  && (location.protocol !== 'https:')  ) {
      location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      return false;
    }
    return true;
  }
}
