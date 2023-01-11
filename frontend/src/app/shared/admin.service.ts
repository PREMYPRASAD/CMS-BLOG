import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }
adminLogin(data:any){
console.log("in service compt",data);
return this.http.post("http://localhost:3000/admin/login",data)
  }

  getToken() {
    return localStorage.getItem('admin-token');
  }

  // for auth guard
  loggedIn() {
    return !!localStorage.getItem('admin-token');
  }
}
