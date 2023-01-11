import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(private user: UserService ,private _router:Router) {}
  login = {
    email: '',
    password: '',
  };
  ngOnInit(): void {}
  hide = true;
  userdata() {
    console.log(this.login);
    this.user.userlogin(this.login).subscribe((data:any) => {
      
      console.log('data from backend in user login compt', data);
      let regx = /password matching/;
      let x = JSON.stringify(data.message);
      if (x.match(regx)) {
        localStorage.setItem('user-token',data.tok);
        console.log('succ:');
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
          this._router.navigate(['/dashboard'])
          localStorage.setItem("email",this.login.email)
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
    });
  }
}