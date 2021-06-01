import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAccountByEmailPasswordRequestDTO } from 'src/app/model/api/account';
import { AccountService } from 'src/app/service/api/account.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  title = 'ProjectManagementSystem';

  public account: GetAccountByEmailPasswordRequestDTO;
  public toast = swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  });

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

        this.toast.fire({
          type: 'success',
          title: 'Login Successful!'
        })

        sessionStorage.setItem("idAccount", JSON.stringify(res.accountId));
        sessionStorage.setItem("loginResponse", JSON.stringify(res));

        console.log(JSON.parse(sessionStorage.getItem("loginResponse")));

        this.router.navigateByUrl('/dashboard/dashboard');
      }

    }, _ => {
      this.toast.fire({
        type: 'error',
        title: 'An error has been encountered while logging in'
      })
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
