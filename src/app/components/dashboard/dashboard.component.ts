import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardDialogComponent } from 'src/app/dashboard-dialog/dashboard-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'ProjectManagementSystem';
  Projects = [
    'project title[1]',
    'project title[2]',
  ];
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(DashboardDialogComponent);

    //dialogRef.afterClosed().subscribe(result )
  }

}