import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/api/admin.service';
import swal from 'sweetalert2';


@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [AdminService],

})
export class ProjectComponent implements OnInit {
  show = true;

  public toast = swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  });

  projectDetails = {
    leader: '',
    budget: '',
    duration: '',
    projectName: '',
    projectEmail: '',
  }

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


    this.projectDetails.leader = JSON.parse(sessionStorage.getItem("leader"));
    this.projectDetails.budget = JSON.parse(sessionStorage.getItem("budget"));
    this.projectDetails.duration = JSON.parse(sessionStorage.getItem("duration"));
    this.projectDetails.projectName = JSON.parse(sessionStorage.getItem("projectName"));
    this.projectDetails.projectEmail = JSON.parse(sessionStorage.getItem("projectEmail"));

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
