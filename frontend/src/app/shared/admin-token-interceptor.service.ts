import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService {

  constructor(private injector :Injector) { }
  intercept(req:any,nxt:any){
    let adminAuthService = this.injector.get(AdminService)
    let tokenizedReq =req.clone(
    {
      setHeaders:{
        Authorization:`Bearer ${adminAuthService.getToken()}`
      }
    })
    return nxt.handle(tokenizedReq)

  }
}
