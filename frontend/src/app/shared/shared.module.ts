import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin.service';
import { SharedRoutingModule } from './shared-routing.module';
import { SuperadminService } from './superadmin.service';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { SuperadminTokenInterceptorService } from './superadmin-token-interceptor.service';
import { AdminTokenInterceptorService } from './admin-token-interceptor.service';
import { UserTokenInterceptorService } from './user-token-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]

})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        UserService,AdminService,SuperadminService,{
          provide:HTTP_INTERCEPTORS,
          useClass: UserTokenInterceptorService,
          multi:true
        },
        {
          provide:HTTP_INTERCEPTORS,
          useClass: SuperadminTokenInterceptorService,
          multi:true
        },
        {
          provide:HTTP_INTERCEPTORS,
          useClass: AdminTokenInterceptorService,
          multi:true
        }
      ],
    };
 }
}