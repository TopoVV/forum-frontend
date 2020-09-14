import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private jwtHelper: JwtHelperService;

  loginForm: FormGroup;
  loginFailed: boolean = false;
  errorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  authenticate() {
    this.loginFailed = false;
    this.authenticationService.authenticate(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: (error: string) => {
        this.loginFailed = true;
        this.errorMessage = error;
      }
    });
  }
}
