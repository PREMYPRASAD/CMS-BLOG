import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor(private http: HttpClient) {}
  SupreadminLogin(data: any) {
    console.log('in service compt', data);
    return this.http.post('http://localhost:3000/superadmin/login', data);
  }

  getToken() {
    return localStorage.getItem('superadmin-token');
  }

  // for auth guard
  loggedIn() {
    return !!localStorage.getItem('superadmin-token');
  }
}