import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../_services/registration.service';
import { passwordConfirmedValidator } from '../_registration/passwordConfirmedValidator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm : FormGroup;

  constructor(
    private registrationService : RegistrationService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordConfirmedValidator });
  }

  register() {
    this.registrationService.registerRegularUser(this.registrationForm.value)
      .subscribe(response => console.log(response));
  }
}


