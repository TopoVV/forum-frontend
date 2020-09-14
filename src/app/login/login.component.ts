import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  badCredentials : boolean = false;

  constructor(
    private authenticationService : AuthenticationService,
    private fb : FormBuilder  
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  authenticate() {
    this.badCredentials = false;
    this.authenticationService.authenticate(this.loginForm.value).subscribe({
      next: (loginResponse) => {
        localStorage.setItem('token', loginResponse.token);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.badCredentials = true;
        }
      }
    })
  }

}
