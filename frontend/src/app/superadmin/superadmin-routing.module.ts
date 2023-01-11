import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSuperadminComponent } from './login-superadmin/login-superadmin.component';

const routes: Routes = [
  { path: '', component: LoginSuperadminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
