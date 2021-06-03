import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DashboardDialogComponent } from 'src/app/dashboard-dialog/dashboard-dialog.component';
import { GetDashboardDTO } from 'src/app/model/api/dashboard';
import { DashboardService } from 'src/app/service/api/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent {
  title = 'ProjectManagementSystem';
  public projects: Array<GetDashboardDTO>;
  private dashboardDto = new GetDashboardDTO;

  Projects = [];

  constructor(public dialog: MatDialog,
    private _dashboardService: DashboardService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    this.projects = new Array<GetDashboardDTO>();
    this.projects.push(new GetDashboardDTO());
    this.dashboardDto.accountId = JSON.parse(sessionStorage.getItem("idAccount"));

    console.log(this.dashboardDto.accountId);
    // sessionStorage.setItem('', this.dashboardDto.accountId)

    // after 5 seconds stop
    // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

    setInterval(() => this._dashboardService.getProjects(this.dashboardDto).subscribe((res) => {
      if (res !== null) {
        console.log(res);
        this.Projects = res;
        // sessionStorage.setItem("projects", res)
      }

    }), 1500);
  }

  routeToKanbanBoard(item) {
    for (var i = 0; i < this.Projects.length; i++) {
      if (this.Projects[i].name === item) {
        sessionStorage.setItem("projectId", this.Projects[i].projectId)
        this.router.navigate(['/board/board']);

        // var projId = JSON.parse(sessionStorage.getItem("projectId"));
        // console.log(projId);
      }
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      data: {
        accountId: this.dashboardDto.accountId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._dashboardService.getProjects(this.dashboardDto).subscribe((res) => {
          if (res !== null) {
            console.log(res);
            this.Projects = res;
            // sessionStorage.setItem("projects", res)
          }

        })
        console.log(this.Projects);
      }
    });
  }

}