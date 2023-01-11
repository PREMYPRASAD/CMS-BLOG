import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/shared/superadmin.service';
@Component({
  selector: 'app-login-superadmin',
  templateUrl: './login-superadmin.component.html',
  styleUrls: ['./login-superadmin.component.css']
})
export class LoginSuperadminComponent implements OnInit {

  constructor(private service:SuperadminService ,private _router:Router) { }
  login={
    email:'',
    password:''
    }
  ngOnInit(): void {
  }
  hide = true;
  superadminlogin(){
    this.service.SupreadminLogin(this.login).subscribe((data:any)=>{
      console.log("the data from backend is :::",data)
      let x = JSON.stringify(data.message);
      if(x.match(/password matching/)){
        console.log('succ:');
        localStorage.setItem('superadmin-token',data.tok);
        Swal.fire({
          toast: true,
          color: 'green',
          // background:'whit',
          icon: 'success',
          title: 'verified',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
        }).then(()=>{
          this._router.navigate(['superadmin/dashboard'])
          // localStorage.clear();
          localStorage.setItem("superadmin",this.login.email)
        })
      }
      else{
        Swal.fire({
          toast: true,
          color:'red',
          background:'yellow',
          icon: 'error',
          title: 'wrong email or password',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          
        });
      }
    })
  }
}
