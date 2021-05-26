import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAccountByEmailPasswordRequestDTO } from 'src/app/model/api/account';
import { AccountService } from 'src/app/service/api/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  title = 'ProjectManagementSystem';

  public account: GetAccountByEmailPasswordRequestDTO;

  constructor(
    private router: Router,
    private _authService: AccountService,
  ) { }

  ngOnInit() {
    this.account = new GetAccountByEmailPasswordRequestDTO();
  }

  login() {
    console.log(this.account);
    this._authService.Login(this.account).subscribe((res) => {
      if (res !== null) {
        console.log("TEST:");
        console.log(res);
        sessionStorage.setItem("idAccount", JSON.stringify(res.accountId));
        this.router.navigateByUrl('/dashboard/dashboard');
      }

    })

  }


  goToForgotPassword() {
    this.router.navigate(['/forgetpw/forgetpw']);
  }
  goToRegistration() {
    this.router.navigate(['/registration/registration']);
  }
  goToDashboard() {
    this.router.navigate(['/dashboard/dashboard']);
  }
}
