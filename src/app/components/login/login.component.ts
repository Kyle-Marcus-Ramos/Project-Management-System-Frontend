import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'ProjectManagementSystem';


  constructor(
    private router: Router,
  ) { }


  goToForgotPassword() {
    this.router.navigate(['/forgot-password/forgot-password']);
  }
  goToRegistration() {
    this.router.navigate(['/registration/registration']);
  }
  goToDashboard() {
    this.router.navigate(['/dashboard/dashboard']);
  }
}
