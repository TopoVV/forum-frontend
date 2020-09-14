import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../login/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) {}

  authenticate(credentials : any) {
    let url = 'http://localhost:8080/auth/';
    let authenticationRequestJson = JSON.stringify(credentials);
    return this.http.post<LoginResponse>(url, authenticationRequestJson, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
