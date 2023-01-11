import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:AdminService,private route :Router){}
  canActivate(): boolean  {
    if(this.auth.loggedIn()){
      return true
    }
    else{
      this.route.navigate(['/admin'])
return false
    }
  }
  
}
