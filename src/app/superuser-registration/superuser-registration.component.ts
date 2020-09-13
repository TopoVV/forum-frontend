import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../_services/registration.service';
import { passwordConfirmedValidator } from '../_registration/passwordConfirmedValidator';

@Component({
  selector: 'app-superuser-registration',
  templateUrl: './superuser-registration.component.html',
  styleUrls: ['./superuser-registration.component.scss']
})
export class SuperuserRegistrationComponent implements OnInit {
  registrationForm : FormGroup;

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
      .subscribe(response => console.log(response));
  }
}
