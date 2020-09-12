import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-superuser-registration',
  templateUrl: './superuser-registration.component.html',
  styleUrls: ['./superuser-registration.component.scss']
})
export class SuperuserRegistrationComponent implements OnInit {
  superuserRegistrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    token: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.superuserRegistrationForm.value);
  }

}
