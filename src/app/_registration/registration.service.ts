import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators/'; 
import { Observable, of, throwError } from 'rxjs';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

  registerRegularUser(registrationData : any) {
    const url : string = 'http://localhost:8080/registration';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const registrationRequestJson =  JSON.stringify(registrationData);
    return this.http.post(url, registrationRequestJson, { headers: headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  reguisterSuperuser(registrationData : any) {
    const url : string = 'http://localhost:8080/registration/superuser';
    const registrationRequestJson : string =  JSON.stringify(registrationData);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<any>(url, registrationRequestJson, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.status === 400) {
      let validationErrors: ValidationErrors[] = errorResponse.error.errors;
      return throwError(validationErrors);
    }
    return throwError("Hello");
  }
}
