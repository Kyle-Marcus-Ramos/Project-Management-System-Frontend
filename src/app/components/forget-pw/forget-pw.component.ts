import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.css']
})
export class ForgetPwComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  goToResetPassword() {
    this.router.navigate(['/resetpw/resetpw']);
  }

  ngOnInit(): void {
  }ng 

}
