import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

  registerRegularUser(registrationData : any) {
    const url : string = 'http://localhost:8080/registration';
    const registrationRequestJson =  JSON.stringify(registrationData);
    return this.http.post(url, registrationRequestJson, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  reguisterSuperuser(registrationData : any) {
    const url : string = 'http://localhost:8080/registration/superuser';
    const registrationRequestJson : string =  JSON.stringify(registrationData);
    return this.http.post(url, registrationRequestJson, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}