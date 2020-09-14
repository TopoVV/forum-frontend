import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, ValidatorFn, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../service/registration.service';
import { passwordConfirmedValidator } from '../validator/passwordConfirmedValidator';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ValidationError } from 'src/app/_error/ValidationError';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registrationSuccess: boolean = false;

  usernameErrors: string[] = [];
  emailErrors: string[] = [];

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordConfirmedValidator });
  }

  register() {
    this.usernameErrors = [];
    this.emailErrors = [];
    this.registrationService.registerRegularUser(this.registrationForm.value)
      .subscribe({
        next: () => {
          this.registrationSuccess = true;
        },
        error: (errors: ValidationError[]) => {
          this.displayErrors(errors);
        }
      });
  }

  displayErrors(errors: ValidationError[]) {
    for (let e of errors) {
      if (e.invalidProperty === 'username') {
        this.usernameErrors.push(e.error);
      }
      if (e.invalidProperty === 'email') {
        this.emailErrors.push(e.error);
      }
    }
  }
}
