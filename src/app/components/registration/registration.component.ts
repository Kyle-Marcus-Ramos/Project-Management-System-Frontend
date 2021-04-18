import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])

  });
  constructor() { }

  get firstname() {
    return this.form.get('firstName')
  }
  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
  title = 'ProjectManagementSystem';

}

