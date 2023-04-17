import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './Authentication.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public _authenticationService: AuthenticationService,
    public router: Router
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authenticationService.isLoggedIn() !== true) {
      // window.alert("Acceso no permitido!");
      this.router.navigate(['/login'])
    }
    return true;
  }
}
