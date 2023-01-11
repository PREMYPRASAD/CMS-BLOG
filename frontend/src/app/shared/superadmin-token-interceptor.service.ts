import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SuperadminService } from './superadmin.service';
@Injectable({
  providedIn: 'root'
})
export class SuperadminTokenInterceptorService implements HttpInterceptor {

  constructor(private injector :Injector) { }
  intercept(req:any,nxt:any){
    let superadminAuthService = this.injector.get(SuperadminService)
    let tokenizedReq =req.clone(
    {
      setHeaders:{
        Authorization:`Bearer ${superadminAuthService.getToken()}`
      }
    })
    return nxt.handle(tokenizedReq)

  }
}