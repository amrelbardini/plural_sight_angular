import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../../features/pages/login/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private authService:AuthenticationService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state.url)


    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(redirectUrl:string):boolean{


    if(this.authService.isLoggedIn){
      return true;
    }
      this.authService.redirectUrl.next(redirectUrl);
      this.router.navigate(['/login']);
      return false

  }

}
