import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CurrentUser } from '../../model/CurrentUser';
import { LoginResponse } from '../dto/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtHelper: JwtHelperService;
  private currentUser: CurrentUser;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  authenticate(credentials: any) {
    let url: string = 'http://localhost:8080/auth/';
    let authenticationRequestJson: string = JSON.stringify(credentials);
    let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<LoginResponse>(url, authenticationRequestJson, { headers: headers })
      .pipe(
        map(loginResponse => {
          localStorage.setItem('token', loginResponse.token);
          const decodedToken = this.jwtHelper.decodeToken(loginResponse.token);
          const authorities: string[] = decodedToken.authorities;
          const username: string = decodedToken.sub;
          const userId: number = decodedToken.userId;

          this.currentUser = new CurrentUser(userId, authorities, username);
        }),
        catchError(this.handleError)
      )
  }

  getCurrentUser(): CurrentUser {
    return this.currentUser
  }

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.status === 403) {
      let message: string = errorResponse.error.errors[0].error;
      return throwError(message);
    }
  }
}
