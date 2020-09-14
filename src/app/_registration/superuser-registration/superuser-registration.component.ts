import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { passwordConfirmedValidator } from '../passwordConfirmedValidator';
import { ValidationError } from 'src/app/_error/ValidationError';

@Component({
  selector: 'app-superuser-registration',
  templateUrl: './superuser-registration.component.html',
  styleUrls: ['./superuser-registration.component.scss']
})
export class SuperuserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  registrationSuccess: boolean = false;

  usernameErrors: string[] = [];
  emailErrors: string[] = [];

  constructor(
    private registrationService: RegistrationService,
    private fb : FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      token: ['', Validators.required]
    }, { validators: passwordConfirmedValidator });
  }

  register() {
    this.registrationService.reguisterSuperuser(this.registrationForm.value)
      .subscribe({
        next: (registrationResponse) => {
          this.registrationSuccess = true;
        },
        error: (errors : ValidationError[]) => {
          this.displayErrors(errors);
        }
      });
  }

  displayErrors(errors : ValidationError[]) {
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
