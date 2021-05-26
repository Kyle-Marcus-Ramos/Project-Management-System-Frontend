import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveAccountDTO } from 'src/app/model/api/registration';
import { AccountService } from 'src/app/service/api/account.service';
import { RegistrationService } from 'src/app/service/api/registration.service';
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
      if (res !== null) {
        this.router.navigateByUrl('/');
      }
    })
  }


  goToResetPassword() {
    this.router.navigate(['/resetpw/resetpw']);
  }

  title = 'ProjectManagementSystem';

}

