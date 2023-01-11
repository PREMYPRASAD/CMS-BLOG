import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperadminService } from './superadmin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate {
  constructor(private auth: SuperadminService,private route :Router){}
  canActivate(): boolean  {
    if(this.auth.loggedIn()){
      return true
    }
    else{
      this.route.navigate(['/superadmin'])
return false
    }
  }
  
}