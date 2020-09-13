import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { RegistrationService } from '../_services/registration.service';

@Component({
  selector: 'app-superuser-registration',
  templateUrl: './superuser-registration.component.html',
  styleUrls: ['./superuser-registration.component.scss']
})
export class SuperuserRegistrationComponent {

  superuserRegistrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    token: new FormControl('')
  })

  constructor(private registrationService : RegistrationService) { }

  register() : void {
    console.log(this.superuserRegistrationForm.value);
    this.registrationService.reguisterSuperuser(this.superuserRegistrationForm.value)
      .subscribe(response => console.log(response));
  }

}
