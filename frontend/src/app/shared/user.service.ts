import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  SignupUser(data:any){
    console.log("in service compt ",data)
    return this.http.post("http://localhost:3000/user/signup",data)
  }
  userlogin(data:any){
    console.log("the data is",data)
    return this.http.post("http://localhost:3000/user/login",data)
  }

   
      getToken() {
        return localStorage.getItem('user-token');
      }
    
      // for auth guard
      loggedIn() {
        return !!localStorage.getItem('user-token');
      }

}
