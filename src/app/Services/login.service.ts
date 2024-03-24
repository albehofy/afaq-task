import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../viewModel/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  Validatelogin(data: Login) {
    const headers = new HttpHeaders({
      'Authorization': 'AIzaSyBsIDV4eowL9WB67TtqWx4KAPRF3K-cJgQ',
      'Content-Type': 'application/json',

    });
    return this.http.post<any>(`https://fronttest.wabcgroup.com/api/Auth/login`, data, this.httpOptions)
  }

}
