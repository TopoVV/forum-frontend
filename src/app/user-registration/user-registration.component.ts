import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../_services/registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  userRegistrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(private registrationService : RegistrationService) { }

  register() {
    console.log(this.userRegistrationForm.value);
    this.registrationService.registerRegularUser(this.userRegistrationForm.value)
      .subscribe(response => console.log(response));
  }

}
