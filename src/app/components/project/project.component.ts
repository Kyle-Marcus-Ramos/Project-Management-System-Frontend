import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/api/admin.service';


@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [AdminService],

})
export class ProjectComponent implements OnInit {
  show = true;

  constructor(public dialog: MatDialog, private router: Router,
    private _adminService: AdminService,
  ) {

  }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    // sessionStorage.setItem("account", JSON.stringify(this.account));
    // this._adminService.GetAllUsers(null).subscribe((res) => {
    //   if (res !== null) {
    //     console.log("HEY THERE")
    //     this.dataSource.data = res;
    //     console.log(this.dataSource.data);
    //   }
    // })
  }

}
