import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {
 
  constructor( private _router: Router) { }

  canActivate(): boolean {
      if (Boolean(localStorage.getItem('user'))) {
          return true;
      } else {
          this._router.navigate(['/login'])
          return false
      }
  }
}



@Injectable()
export class LoggedInAuthGuard implements CanActivate {

    constructor( private _router: Router) { }

    canActivate(): boolean {
        if (Boolean(localStorage.getItem('user'))) {
            this._router.navigate(['/home'])
            return false
        } else {
            return true
        }
    }
}