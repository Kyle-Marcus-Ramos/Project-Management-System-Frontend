import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveAccountDTO } from 'src/app/model/api/registration';
import { AccountService } from 'src/app/service/api/account.service';
import { RegistrationService } from 'src/app/service/api/registration.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]

})
export class RegistrationComponent {
  // items = [{ selected: true, label: 'Are you an admin?' }];

  public account: SaveAccountDTO;
  productForm: FormGroup;
  public isVisible: boolean = false;

  public toast = swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: RegistrationService,
  ) { }


  ngOnInit() {
    this.account = new SaveAccountDTO();

  }

  onSubmit() {


  }

  registration() {
    this.account.name = this.account.name;
    this.account.email = this.account.email;
    this.account.password = this.account.password;
    this.account.isAdmin = this.account.isAdmin;
    this._authService.register(this.account).subscribe((res) => {
      console.log(res);
      if (res === null) {
        this.toast.fire({
          type: 'success',
          title: 'Account Created!'
        })
        this.router.navigate(['/login/login']);
      }
    }), _ => {
      this.toast.fire({
        type: 'error',
        title: 'An error has been encountered while logging in'
      })
    }
  }


  goToResetPassword() {
    this.router.navigate(['/resetpw/resetpw']);
  }

  title = 'ProjectManagementSystem';

}

