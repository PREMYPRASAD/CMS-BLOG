import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest,HttpEvent} from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserTokenInterceptorService {

  constructor(private injector :Injector) { }
  intercept(req:HttpRequest<any>,nxt:HttpHandler): Observable<HttpEvent<any>> {
   
    let userAuthService = this.injector.get(UserService)
    let tokenizedReq =req.clone(
    {
      setHeaders:{
        Authorization:`Bearer ${userAuthService.getToken()}`
      }
    })
    return nxt.handle(tokenizedReq)

  }
}



