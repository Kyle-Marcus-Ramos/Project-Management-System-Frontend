import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GetAccountByEmailPasswordRequestDTO } from 'src/app/model/api/account';
import { AccountService } from 'src/app/service/api/account.service';
import swal from 'sweetalert2';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AccountService]

})
export class ProfileComponent implements OnInit {
  show = true;
  public account: GetAccountByEmailPasswordRequestDTO;
  public toast = swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  });

  profileDetails = {
    accountId: '',
    name: '',
    email: '',
    password: '',
    isAdmin: '',
    isActive: '',
  }

  public title: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // get filterStatus() { return this.filterForm.get('filterStatus').value; }

  constructor(public dialog: MatDialog, private router: Router,
    private _authService: AccountService,

  ) {

  }

  ngOnInit() {
    this.account = new GetAccountByEmailPasswordRequestDTO();

    var response = JSON.parse(sessionStorage.getItem("loginResponse"));
    this.profileDetails.accountId = response.accountId;
    this.profileDetails.name = response.name;
    this.profileDetails.email = response.email;
    this.profileDetails.password = response.password;
    this.profileDetails.isAdmin = response.isAdmin;
    this.profileDetails.isActive = response.isActive;

    console.log("TEST")
    console.log(this.profileDetails);




    this._authService.Login(this.account).subscribe((res) => {
      if (res !== null) {
        console.log("TEST:");
        console.log(res);

        this.toast.fire({
          type: 'success',
          title: 'Account Retrieved from database!'
        })

        sessionStorage.setItem("idAccount", JSON.stringify(res.accountId));
      }

    }, _ => {
      this.toast.fire({
        type: 'error',
        title: 'An error has been encountered while logging in'
      })
    })
  }

}
