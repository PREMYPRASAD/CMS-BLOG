import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private auth:UserService,private route :Router){}
  canActivate(): boolean  {
    if(this.auth.loggedIn()){
      return true
    }
    else{
      this.route.navigate([''])
return false
    }
  }
  
}

  

