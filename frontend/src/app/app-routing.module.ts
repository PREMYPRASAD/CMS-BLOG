import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },



  {path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {path: 'superadmin',
  loadChildren: () => import('./superadmin/superadmin.module').then((m) => m.SuperadminModule),
  },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
