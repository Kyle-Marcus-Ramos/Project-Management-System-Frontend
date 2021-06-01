import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/api/admin.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AdminService],

})
export class ProfileComponent implements OnInit {
  show = true;


  public title: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // get filterStatus() { return this.filterForm.get('filterStatus').value; }

  constructor(public dialog: MatDialog, private router: Router,
    private _adminService: AdminService,
  ) {

  }

  ngOnInit() {
    // sessionStorage.setItem("account", JSON.stringify(this.account));
    this._adminService.GetAllUsers(null).subscribe((res) => {
      if (res !== null) {

      }

    })
  }

}
